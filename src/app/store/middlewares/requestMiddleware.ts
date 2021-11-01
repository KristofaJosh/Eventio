import { Middleware } from "@reduxjs/toolkit";
import axios, { AxiosRequestConfig } from "axios";
import { RootState } from "../reducers";
import { resetAuthState, updateToken } from "../reducers/auth/auth.reducer";
import eventioRequest from "../../../utils/apis/request";
import { authUrl } from "../../../utils/apis";

export const requestMiddleWare: Middleware =
    ({ dispatch, getState }: { dispatch: any; getState: () => RootState }) =>
    (next) =>
    (action) => {
        // pass the action down the middleware pipeline
        next(action);

        const requestConfiguration = (config: AxiosRequestConfig) => {
            const {
                auth: { session },
            } = getState();

            if (config.url !== authUrl) {
                return {
                    ...config,
                    headers: {
                        ...config.headers,
                        Authorization: session.token,
                    },
                };
            }
            return config;
        };

        const responseErrorHandler = (error: any) => {
            // console.log({ ...error });
            if (!error.response) {
                error.response = {
                    message: "Network Error, Please check your connection.",
                    status: 0,
                };
            }

            switch (error.code) {
                case "ECONNABORTED":
                    error.response = {
                        message: "Server connection timed out.",
                        status: 408,
                    };
                    break;
                default:
                    break;
            }

            if ([401, 403].includes(error?.response?.status)) {
                if (error?.response?.data.error === "Auth.InvalidToken") {
                    axios({
                        method: "post",
                        url: process.env.REACT_APP_BASE_URL + authUrl,
                        data: { refreshToken: getState().auth.session.refreshToken },
                        headers: {
                            APIKey: process.env.REACT_APP_API_KEY as string,
                        },
                    })
                        .then((response) => {
                            dispatch(updateToken(response.headers));

                            const newConfig = {
                                ...error.config,
                                headers: {
                                    ...error.config.headers,
                                    Authorization: `${response.headers.authorization}`,
                                },
                            };

                            axios.request(newConfig).then((response) => response);
                        })
                        .catch(() => {
                            dispatch(resetAuthState());
                        });
                }
                if (error?.response?.status === 401) {
                    dispatch(resetAuthState());
                }
            }

            return Promise.reject(error);
        };

        eventioRequest.interceptors.request.use(requestConfiguration, (error) => {
            // Do something with request error
            return Promise.reject(error);
        });

        eventioRequest.interceptors.response.use((response) => {
            return response;
        }, responseErrorHandler);
    };

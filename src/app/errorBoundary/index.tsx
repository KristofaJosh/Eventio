import React, { Component } from "react";
import SomethingWentWrong from "../components/molecules/error/somethingWentWrong";

class ErrorBoundary extends Component<any, { hasError: boolean; error: any; errorInfo: any }> {
    constructor(props: any) {
        super(props);
        // eslint-disable-next-line react/no-unused-state
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError() {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        // eslint-disable-next-line react/no-unused-state
        this.setState({ error, errorInfo });
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <SomethingWentWrong />
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;

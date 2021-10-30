import React, { CSSProperties, FC, HTMLAttributes } from "react";
import "./typography.scss";

type fontLevels = "f28" | "f22" | "f18" | "f16" | "f14" | "f12";

type TypographyBaseType = { text?: string; weight?: CSSProperties["fontWeight"]; lighter?: boolean };

type TextHeadingsComponent = React.FC<HTMLAttributes<HTMLHeadingElement> & TypographyBaseType & { level: 1 | 2 | 3 | 4 | 5 }>;

type TypographyType = FC<HTMLAttributes<HTMLParagraphElement> & TypographyBaseType & { level?: fontLevels }>;

type TypographyBase = TypographyType & { Heading: TextHeadingsComponent };

const Typography: TypographyBase = ({ text, children, weight, lighter, className, level = "f16", ...props }) => {
    return (
        <p className={`typography__text ${level} ${className ?? ""}`} style={{ fontWeight: weight, color: lighter ? "var(--text-grey)" : undefined }} {...props}>
            {text || children}
        </p>
    );
};

const TextHeading: TextHeadingsComponent = ({ children, weight, level, lighter, text, className, ...rest }) => {
    const size = ["f28", "f18", "f16", "f14", "f12"];
    return React.createElement(`h${level || 1}`, { ...rest, style: { fontWeight: weight, color: lighter ? "var(--text-grey)" : "inherit" }, className: `typography__text ${size[level - 1]} ${className ?? ""}` }, text || children);
};

Typography.Heading = TextHeading;

export default Typography;

import HTMLWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack, {ResolveOptions} from "webpack";

export function buildResolvers(): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js']
    }
}


import { defineConfig } from "unocss";
export default defineConfig({
    rules: [
        ['inline-code', {
            "display": "inline-block",
            "background": "rgba(255, 255, 255, 0.08)",
            "backdrop-filter": "blur(4px)",
            "border-radius": "8px",
            "padding": "0.25em 0.25em",
        },],
    ]
})
import opentelemetry from "@opentelemetry/sdk-node";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-proto";

const sdk = new opentelemetry.NodeSDK({
	traceExporter: new OTLPTraceExporter({
		url: "http://collector:4318/v1/traces",
		headers: {},
	}),
});
sdk.start();

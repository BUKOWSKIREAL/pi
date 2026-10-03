import { openAICompletionsApi } from "../api/openai-completions.lazy.ts";
import { envApiKeyAuth } from "../auth/helpers.ts";
import { createProvider, type Provider } from "../models.ts";
import { STEPFUN_AI_STEP_PLAN_MODELS } from "./stepfun-ai-step-plan.models.ts";

export function stepfunAiStepPlanProvider(): Provider<"openai-completions"> {
	return createProvider({
		id: "stepfun-ai-step-plan",
		name: "Step Plan (International)",
		baseUrl: "https://api.stepfun.ai/step_plan/v1",
		auth: { apiKey: envApiKeyAuth("Step Plan (International) API key", ["STEPFUN_AI_STEP_PLAN_API_KEY"]) },
		models: Object.values(STEPFUN_AI_STEP_PLAN_MODELS),
		api: openAICompletionsApi(),
	});
}

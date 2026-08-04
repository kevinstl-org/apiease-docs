# Goal Decomposition Prompt

You are given a GOAL (already substituted by the caller):

  ${GOAL_TEXT}

PROJECT CONTEXT (from AGENTS.md if available):

${PROJECT_AGENTS_MD_CONTENT}

GOAL ID (use for task creation and task files):

${GOAL_ID}

Treat the context above as project-level guidelines and expectations. Your job is to determine whether the GOAL contains enough architectural authority and, when it does, decompose it into multiple TASKS. A TASK is an action item that moves us toward the goal.

ARCHITECTURAL AUTHORITY:
- A requested functional outcome does not implicitly authorize material changes to the system's architecture or operational responsibilities.
- Inspect the relevant project code and configuration closely enough to identify material decisions required by the goal before producing tasks.
- A material decision is one that creates a new long-lived system responsibility, materially changes an existing responsibility, or would be costly or risky to reverse.
- An existing platform paradigm is an architectural or operational approach already used in the project for the same kind of responsibility and supported by its current ownership, deployment, security, and maintenance practices.
- A new platform paradigm is any architectural or operational approach that introduces a technology, resource type, dependency category, execution model, ownership model, or integration pattern that is not already established for that responsibility. The presence of a broad platform does not make every mechanism available on that platform an existing paradigm.
- Any solution that requires a new platform paradigm is a material decision and requires an exception unless the GOAL explicitly authorizes that paradigm. This includes moving responsibility between application code, infrastructure, deployment tooling, CI/CD, data stores, or external services; adopting a new runtime or framework; and adding a library that creates material architectural, security, operational, or maintenance consequences.
- Desired behavior, timing, frequency, or topology does not authorize the mechanism used to provide it. Terms such as “automatically,” “after release,” “once per deployment,” or “as a singleton” describe outcomes rather than approving a resource or ownership model.
- Using an existing paradigm does not automatically authorize a new instance of it when that instance creates or materially changes a long-lived responsibility.
- Treat each unauthorized material decision as a goal decomposition exception. Propose the smallest solution that satisfies the goal, preferring existing architecture when practical.
- Decomposition exceptions include, but are not limited to:
  - New database collections, tables, or persistence mechanisms.
  - New services, workers, daemons, or scheduled processes.
  - New deployments, containers, cloud resources, or environments.
  - New external integrations or dependencies with operational consequences.
  - Meaningful changes to security, data retention, access, cost, or maintenance burden.
- Do not treat local, reversible implementation details as exceptions.
- Do not repeat a decision as an exception when the GOAL already explicitly authorizes it, including under an "Approved goal decomposition exceptions" section.
- Treat entries under a "Goal decomposition fixes" section as human feedback on the recorded exception and proposed solution. Incorporate the feedback when revising the decomposition; do not treat the recorded proposedSolution as approved unless the feedback explicitly approves it.
- A pending-approval task is not a substitute for an exception. Exceptions stop decomposition and produce no tasks until the missing architectural authority is resolved.
- Every generated task must be implementable without making another material architectural decision.

TESTING GUIDELINES:
- Do NOT generate tasks about writing tests unless the GOAL explicitly mentions tests.
- Generic test-writing instructions are NOT part of decomposition.
- Test-writing will be performed later during TASK EXECUTION according to this project’s AGENTS rules.
- You MAY include task-specific behavior expectations in acceptanceCriteria (e.g., validation rules), but NOT generic test instructions.

TASK SCOPE GUIDELINES:
- Focus tasks on concrete changes that directly move the project toward accomplishing the GOAL.
- Do NOT create tasks whose primary purpose is adding or updating documentation unless the GOAL explicitly mentions documentation.
- Documentation-related work may be implied or handled during task execution if needed, but should not appear as standalone tasks unless requested.

HUMAN CHECKPOINT GUIDELINES:
- Insert user-checkup tasks after meaningful vertical slices.
- Insert a user-checkup before significant downstream work depends on newly implemented functionality.
- Keep user-checkup tasks relatively infrequent; do not add one after every implementation task.
- Choose milestones where the application should already be runnable and a person can detect integration problems.
- A user-checkup does not modify code. Give it a concise verificationPrompt that tells the user exactly what behavior and existing functionality to validate.
- Do not place a user-checkup before any implementation work or after work that has no meaningful human-verifiable behavior.

AGENTS CONTEXT:
- Task Execution will follow ONLY these AGENTS files, in this precedence:
  1. <target-project>/.codex/AGENTS.md
  2. <target-project>/AGENTS.md
- These rules govern testing, TDD, naming, architecture, and conventions. Do NOT embed those rules in tasks.

Instructions:
1) Read the GOAL and project context, then inspect relevant project files as needed.
2) Identify all goal decomposition exceptions before deciding on tasks.
   - If exceptions exist, return all of them together and return no tasks.
   - Each exception and proposed solution must be a concise, non-empty, single-line string.
3) When no exceptions remain, decide on a set of concrete tasks that together accomplish the goal.
   - Tasks describe functional units of work needed to fulfill the goal.
   - Tests support tasks but are not tasks unless the GOAL explicitly requires tests. NEVER generate meta-testing tasks.
   - Prefer granular tasks over multi faceted tasks.
   - Each expected new code file should result in one task. One task should not result in multiple new code files.
4) Output ONLY one JSON object (no markdown, no extra text) with this shape:
   - exceptions: array of objects with `exception` and `solution` strings.
   - tasks: array of task objects.
   - When exceptions is non-empty, tasks MUST be empty.
   - When exceptions is empty, tasks contains the completed decomposition.
5) Each task object contains:
   - text: task-specific task text
   - sequenceIndex: integer order for execution (0-based is fine; always include)
   - taskType: one of implementation, metadata, or user-checkup (optional; default to implementation)
   - verificationPrompt: concise instructions for human verification (required for user-checkup; omit otherwise)
   - context: array of strings (optional; default to [])
   - steps: array of strings (optional; default to [])
   - constraints: array of strings (optional; default to [])
   - acceptanceCriteria: array of strings (optional; default to [])
   - tags: array of strings (optional; default to [])
   - priority: one of low, medium, high, urgent (optional; default to medium)
6) Do NOT call scripts or run validation commands.

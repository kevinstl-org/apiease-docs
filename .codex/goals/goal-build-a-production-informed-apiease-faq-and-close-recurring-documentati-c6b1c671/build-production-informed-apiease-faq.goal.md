# Build a production-informed APIEase FAQ and close recurring documentation gaps

## Objective

Use the complete production AI conversation export at `/Users/kevin/Downloads/apiease-production.aiConversations.json` as evidence of what APIEase customers try to accomplish, misunderstand, and struggle to troubleshoot. Expand the public APIEase FAQ and improve the supporting documentation so customers and Apex can retrieve concise, authoritative answers.

This is a documentation goal. Make changes in `apiease-docs`; use sibling repositories only as read-only sources of truth unless the user separately authorizes implementation changes elsewhere. Do not change Apex prompts or product behavior as part of this goal. Durable product knowledge should live in the documentation and flow into the generated knowledge base.

## Source data and integrity checks

The supplied export is production data and must remain outside the repository. At the time this goal was prepared, it contained:

- 377 stored conversation documents
- 371 distinct `apiEaseConversationId` values
- 3,811 messages in total
- 1,681 messages whose role is `user`
- Six conversations split across multiple chunks
- No duplicate `(apiEaseConversationId, messageIndex)` pairs

Before analysis, verify these invariants against the source file. If the file is missing, unreadable, structurally different, or has materially different totals, stop and ask the user how to proceed rather than silently analyzing a partial corpus.

Reconstruct each complete conversation by grouping records on `apiEaseConversationId`, ordering records by `chunkIndex`, and ordering their messages by `messageIndex`. Use assistant messages only to understand the customer's context, follow-up, correction, or failed explanation. Historical assistant answers are not authoritative evidence of APIEase behavior.

Every user message must be accounted for during analysis, including short follow-ups, corrections, repeated questions, errors, and expressions of frustration. A follow-up may contribute context to the same information need instead of becoming its own FAQ question, but it may not be silently dropped. Exclude only spam, abuse, accidental secrets, and content unrelated to APIEase use, and retain a sanitized aggregate reason for each exclusion category.

Treat repeated starter prompts, generated suggestions, exact duplicates, and boilerplate separately from organic customer questions so they do not distort frequency rankings. They still count as messages considered and may still reveal a real information need. Do not infer that all repeated wording is synthetic merely because it is repeated.

## Production-data safety

The export may contain real domains, names, email addresses, account details, request IDs, URLs, credentials, tokens, and other sensitive or identifying data.

- Never copy or move the export into this repository.
- Never commit raw messages, conversation identifiers, shop domains, secrets, credential-like strings, or customer-specific payloads as source, fixtures, snapshots, examples, or analysis artifacts.
- Do not send the export or raw excerpts to external services.
- Keep terminal and tool output aggregate-only; do not print raw messages while analyzing the corpus.
- Do not quote customer messages in documentation or committed analysis. Capture wording patterns only as sanitized paraphrases and generic synonyms.
- Use unmistakably fictional placeholders such as `YOUR_API_KEY`, `YOUR_ACCESS_TOKEN`, `your-store.myshopify.com`, and `example.com`.
- If a temporary working analysis or canonical inventory is needed between tasks, keep it outside Docusaurus content and out of git, make it aggregate and sanitized, and remove it after the goal is complete. The production JSON must remain the only raw source-data file.

## Evidence and answer-validation rules

Customer messages are demand signals, not sources of truth. Validate every published statement about APIEase against the current product and supported public contracts.

Use this evidence in order:

1. Inspect the current documentation in this repository, including related pages rather than only the FAQ.
2. Inspect current APIEase implementation and tests under `../apiease` when the docs are incomplete, ambiguous, or potentially outdated. Follow any applicable `AGENTS.md` files there. Do not expose private runtime objects, internal paths, or code-only fields in public docs.
3. For recurring developer questions, inspect the relevant current public API, `apiease-cli`, or `apiease-template` source and documented contracts in their sibling repositories when those repositories are available.
4. Use well-established technical standards and official provider documentation for general concepts, but do not turn provider-specific behavior into an APIEase promise.
5. Ask the user, who is the APIEase subject-matter expert, whenever the sources still leave a product behavior, intended support policy, recommended workflow, terminology choice, or customer-facing answer unresolved.

Do not invent an answer, choose among conflicting sources silently, or preserve a historical Apex answer merely because it sounds plausible. When code and documentation disagree, determine whether the documentation is stale or the implementation is incidental; ask the user if intended behavior remains uncertain.

## Required subject-matter-expert checkpoint

Analyze and validate before making documentation changes that depend on uncertain answers. Exhaust the existing docs, relevant code, and well-understood technical knowledge first so the user is not asked questions that can be answered reliably from available evidence.

For each genuine ambiguity, present the user with a concise, numbered question that includes:

- The underlying reusable customer need, without raw customer text or identifying details
- What the current docs and code establish
- The exact point that remains unknown or contradictory
- The customer-facing consequence of the plausible answers
- A recommendation only when the available evidence supports one

Use a `user-checkup` before any downstream documentation task that would encode those answers. Proceed with unrelated, fully verified material when safe, but do not publish an affected answer until the user has responded. Incorporate the user's answers into the authoritative page and FAQ inventory. If a question remains unanswered, record it as unresolved in the completion summary and omit unsupported claims from public docs.

The task decomposition should put corpus analysis and the canonical inventory before documentation implementation so ambiguities can be surfaced early. Do not defer all questions until after the docs have been written.

## Corpus analysis and canonical inventory

Derive the taxonomy from the complete corpus rather than forcing messages into a predetermined list. Likely themes include, but are not limited to:

- APIEase capabilities, limitations, and product orientation
- Creating, editing, finding, duplicating, and deleting requests and other resources
- Request types, HTTP methods, addresses, headers, bodies, and parameters
- Credentials, tokens, permissions, sensitive values, and 401 or 403 errors
- Shopify Admin API usage and automatic versus overridden Shopify access tokens
- External APIs, suppliers, and the information required to configure an integration
- Storefront calls, customer-authenticated requests, app proxy behavior, and CORS-related confusion
- Manual, remote, webhook, cron, proxy, widget, and Shopify Flow triggers
- Chained requests and multi-step integrations
- Product, inventory, order, and customer synchronization patterns
- Variables, Functions, Liquid requests, and System requests
- Widgets, app blocks, app embeds, and storefront behavior
- Testing requests, interpreting failures, and isolating configuration problems
- APIEase API keys, the public API, CLI, template, and AI-agent workflows
- Security boundaries and what APIEase can or cannot retrieve, reveal, inject, or generate

For each canonical information-need cluster, maintain a sanitized working inventory containing:

- A stable, descriptive cluster name
- Approximate frequency by distinct conversation and by user message
- Sanitized customer terms and synonyms useful for documentation search and Apex retrieval
- The actual customer objective and important variants
- Whether current documentation answers it accurately and whether the answer is easy to find
- Conflicts, outdated statements, and missing prerequisites found in existing docs
- The proposed content disposition: FAQ entry, conceptual page, how-to guide, example, troubleshooting page, existing-page improvement, exclusion, or unresolved SME question
- The narrowest authoritative existing page to link or the page that must be created or updated
- The evidence used to validate the proposed answer

Reconcile the analysis at the end so all 1,681 user messages are represented by a cluster, contextual follow-up, or sanitized exclusion. Frequencies are prioritization signals, not an instruction to publish one entry per message. Consolidate equivalent questions without erasing meaningful distinctions such as an APIEase API key versus a Shopify access token.

Do not commit a message-level ledger or publish corpus counts, rankings, internal conversation details, or analysis artifacts on the documentation site. Report only sanitized aggregate analysis in the goal completion summary.

## Documentation design and implementation

Expand the FAQ under `docs/docs/general/faq/`. Keep `faq.md` as a clear landing page. If the canonical set is too large for one genuinely scannable page, create focused category pages and turn the landing page into a concise navigable index. Organize categories and questions by customer intent and customer-facing terminology, not internal APIEase architecture.

Not every cluster should become a literal FAQ entry. A customer asking APIEase to build a one-off integration with a named provider may instead support reusable questions such as:

- How do I connect APIEase to an external API?
- What information do I need from an API provider?
- Where should I put an API key or access token?
- How do I test whether authentication is working?
- How do I synchronize products or inventory?

Each FAQ entry must:

- Use a natural customer question as its heading.
- Begin with a direct, accurate answer.
- Include common sanitized synonyms when they improve search and retrieval.
- Explain only the distinctions and prerequisites needed for a quick answer.
- Link to the narrowest authoritative documentation page for procedures and detail.
- Clearly distinguish similarly named credentials, resources, triggers, and request types.
- State clearly when APIEase cannot retrieve, reveal, generate, or support something.
- Avoid provider-specific instructions unless the behavior is officially supported and validated.
- Avoid duplicating long tutorials, examples, or reference content already owned by a dedicated page.

When a recurring need exposes a real documentation gap, add or improve the appropriate conceptual, task-oriented, example, or troubleshooting page in the existing documentation structure, then link it from the FAQ. Prefer dedicated pages over fragile in-page anchors. Cross-link related concepts so customers and Apex can reach the authoritative answer from likely entry points.

Review existing answers as well as adding new ones. Correct inaccurate, ambiguous, duplicated, outdated, poorly linked, or hard-to-retrieve content encountered in the prioritized clusters. Preserve the current user-facing technical style and sentence-case headings. Use APIEase UI and public-contract terminology, not internal implementation language.

Update `docs/sidebars.js` for every new public page that should be navigable. Keep existing top-level documentation areas intact unless the corpus provides a clear, user-centered reason for a small navigation adjustment.

## Scope controls

- Do not modify `../apiease` or other sibling repositories.
- Do not change Apex default instructions as a substitute for documentation.
- Do not add product capabilities, integrations, or promises that are not supported by verified current behavior.
- Do not create a provider-specific guide from a single customer situation unless it represents an officially supported, reusable APIEase workflow.
- Do not expose internal APIEase runtime objects, private implementation paths, supporting-project internals, or code-only field names unless they are already a documented public API, template, or CLI contract.
- Do not add unit tests or fixtures for documentation-only text changes. Follow repository instructions for build-based documentation verification.
- Do not commit one-off corpus-processing code unless it has clear enduring, data-independent value; prefer temporary local analysis tooling that emits only sanitized aggregates.

## Validation workflow

Follow the repository's TDD-style documentation workflow:

1. Before editing documentation, run `./.codex/run_test_suite.sh` from the repository root and record any pre-existing failure without changing unrelated content.
2. Implement the FAQ, supporting documentation, cross-links, and sidebar changes.
3. Verify relative links, page titles, sidebar placement, and that no new page is orphaned.
4. Run `npm run knowledge:check` from `docs/` and update the generated knowledge-base artifact through the repository's established workflow if the check reports expected documentation drift.
5. Run `./.codex/run_test_suite.sh` again from the repository root and fix documentation-related build failures.
6. Inspect the rendered or built FAQ structure for scannability and verify that representative canonical questions and synonyms appear correctly in the generated knowledge-base content.
7. Inspect the final diff for accidental customer data, real domains, credentials, raw excerpts, internal-only implementation details, and unrelated changes.

## Completion summary

Provide a sanitized completion summary containing:

- Confirmation that the full corpus was reconstructed and all user messages were accounted for
- Major question categories and approximate aggregate frequency
- Common misunderstandings and the most important prior documentation gaps
- The number of canonical FAQ questions produced and the categories they cover
- FAQ pages, supporting pages, and existing pages added or improved
- Important clusters intentionally excluded and the aggregate reason for exclusion
- Any unresolved questions or conflicts that still require the APIEase subject-matter expert
- Results of `knowledge:check`, the baseline build, and the final build

Do not include raw customer excerpts, conversation IDs, shop domains, secrets, or other identifying details in the completion summary.

## Acceptance criteria

- The analysis reconstructs all 371 conversations from all 377 source documents and accounts for all 1,681 user messages, or stops for guidance if the verified source totals differ.
- Exact duplicates, starter prompts, generated suggestions, and boilerplate do not artificially dominate prioritization.
- Major recurring APIEase help needs across the corpus are represented, not only authentication questions.
- Equivalent customer needs are consolidated into canonical questions without collapsing materially different concepts.
- Every published APIEase answer is supported by current documentation, verified current product behavior, a public contract, well-established technical knowledge, or an explicit answer from the APIEase subject-matter expert.
- Genuine ambiguities are presented to the user before affected documentation is written; unanswered ambiguities remain explicitly unresolved and are not invented.
- FAQ answers are concise, direct, searchable, and linked to authoritative supporting pages.
- Detailed procedures live in appropriate dedicated pages rather than making the FAQ an unstructured tutorial dump.
- The FAQ landing page and any category pages are scannable and reachable through the sidebar.
- The documentation consistently distinguishes APIEase API keys, Shopify access tokens, and external-provider credentials, along with other commonly confused concepts revealed by the corpus.
- No production export, customer secret, identifying data, raw excerpt, internal conversation identifier, or unsafe customer-specific example is committed.
- Sibling repositories remain unchanged.
- `npm run knowledge:check` and the final `./.codex/run_test_suite.sh` pass.
- The completion summary reports the canonical FAQ count, documentation changes, exclusions, unresolved questions, and validation results without exposing production data.

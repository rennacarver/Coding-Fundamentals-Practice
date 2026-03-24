# commit-ai prompt

When I type "commit-ai", do the following in order:

1. Run `git status --short` and `git diff --stat`.
2. Summarize the changes in 3-6 bullets.
3. Propose a clear Conventional Commit message (`type(scope): summary`).
4. Stage everything with `git add -A`.
5. Commit with the proposed message.
6. Push to the current branch's upstream.
7. Print the final commit hash and branch status.

If push fails, show the exact error and suggest the safest fix.

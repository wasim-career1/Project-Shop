<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

## What Lovable manages

Rules outside this block are the project's own. Change the pieces below in
Lovable, not by hand. With the [Lovable MCP](https://mcp.lovable.dev)
connected, `send_message` asks Lovable to do it; otherwise ask the user to
use the editor.

- **Database.** Do not add or edit `supabase/migrations/` or `drizzle/`.
  Ask Lovable to change the schema.
- **Generated files.** Do not edit a file whose header says it is automatically
  generated.
- **AI gateway.** Keep model calls on Lovable's gateway, and keep
  `LOVABLE_API_KEY` out of browser code.
- **Connectors.** Lovable provides native connectors. `list_connectors` shows
  which are enabled; `add_connector` only returns the dashboard link. When a
  connector is enabled, calls go through the connector gateway and need
  `LOVABLE_API_KEY`. When Lovable does not provide one, users can bring their
  own key and store it in Secrets.
- **Secrets.** Lovable manages them. Do not put secret values in the repo.
<!-- LOVABLE:END -->

## Application architecture
- Retain TanStack Start file routing and Worker-compatible server functions; this is the supported deployment runtime.
- Keep catalogue data and business validation in shared modules, with durable content accessed through a storage interface; this separates editing from presentation.
- Authorize owner operations on the server using verified Cloud identities and a protected role table; browser state never grants access.
- Use semantic global design tokens and shared controls; this keeps the editorial visual system consistent across pages.
- Store owner sessions in an httpOnly same-site cookie and revalidate identity plus role for every operation; the owner UI never stores credentials or tokens.
- Keep uploaded media private and serve only assets referenced by published products; workspace policy forbids public buckets.
- Keep the saved-item cart in a shared browser-only provider storing product IDs, and resolve displayed products from the published catalogue; this preserves affiliate safeguards without stale prices or checkout data.

-- Rename the demo tenant slug from 'future-kid' to 'cinescape' to match the
-- rebrand in commit d0175ed. Seed code, fixtures, and the web client now send
-- tenantSlug='cinescape'; without this, login against a pre-rebrand database
-- returns 401 because no tenant with that slug exists.
--
-- Idempotent: no-op if already renamed, and guards against an existing row
-- colliding on the new slug.

UPDATE tenants
   SET slug = 'cinescape',
       name = 'Cinescape'
 WHERE slug = 'future-kid'
   AND NOT EXISTS (SELECT 1 FROM tenants WHERE slug = 'cinescape');

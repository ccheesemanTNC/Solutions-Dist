"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.upgradeSiteSchema = void 0;
const objects_1 = require("../objects");
const site_schema_version_1 = require("./site-schema-version");
const _apply_site_schema_1 = require("./_internal/_apply-site-schema");
const _enforce_lowercase_domains_1 = require("./_internal/_enforce-lowercase-domains");
const _ensure_catalog_1 = require("./_internal/_ensure-catalog");
const _purge_non_guids_from_catalog_1 = require("./_internal/_purge-non-guids-from-catalog");
const _ensure_telemetry_1 = require("./_internal/_ensure-telemetry");
const _migrate_feed_config_1 = require("./_internal/_migrate-feed-config");
/**
 * Upgrades the schema upgrades
 * @param model IModel
 */
function upgradeSiteSchema(model) {
    if (objects_1.getProp(model, "item.properties.schemaVersion") === site_schema_version_1.SITE_SCHEMA_VERSION) {
        return model;
    }
    else {
        // apply upgrade functions in order...
        model = _apply_site_schema_1._applySiteSchema(model);
        model = _enforce_lowercase_domains_1._enforceLowercaseDomains(model);
        model = _ensure_catalog_1._ensureCatalog(model);
        model = _purge_non_guids_from_catalog_1._purgeNonGuidsFromCatalog(model);
        model = _ensure_telemetry_1._ensureTelemetry(model);
        model = _migrate_feed_config_1._migrateFeedConfig(model);
        // WARNING - If you are writing a site schema migration,
        // you probably need to apply it to site drafts as well!
        // See https://github.com/Esri/hub.js/issues/498 for more details.
        return model;
    }
}
exports.upgradeSiteSchema = upgradeSiteSchema;
//# sourceMappingURL=upgrade-site-schema.js.map
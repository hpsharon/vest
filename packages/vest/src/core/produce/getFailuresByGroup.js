import collectFailureMessages from 'collectFailureMessages';
import throwError from 'throwError';

/**
 * Gets failure messages by group.
 * @param {'warn'|'error'} severityKey    Severity filter.
 * @param {string} group                  Group name.
 * @param {string} [fieldName]            Field name.
 */
const getByGroup = (severityKey, group, fieldName) => {
  if (!group) {
    throwError(
      `get${severityKey[0].toUpperCase()}${severityKey.slice(
        1
      )}ByGroup requires a group name. Received \`${group}\` instead.`
    );
  }

  return collectFailureMessages(severityKey, { group, fieldName });
};

export default getByGroup;

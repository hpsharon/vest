type DoneCB = (res: DraftResult) => void;

export type IVestResult = {
  name: string;
  errorCount: number;
  warnCount: number;
  testCount: number;
  tests: {
    [fieldName: string]: {
      errorCount: number;
      warnCount: number;
      testCount: number;
      errors?: string[];
      warnings?: string[];
    };
  };
  groups: {
    [groupName: string]: {
      [fieldName: string]: {
        errorCount: number;
        warnCount: number;
        testCount: number;
        errors?: string[];
        warnings?: string[];
      };
    };
  };
  /**
   * Returns whether the specified field has errors
   */
  hasErrors: (fieldName?: string) => boolean;
  /**
   * Returns whether the specified field has warnings
   */
  hasWarnings: (fieldName?: string) => boolean;
  /**
   * Returns the error messages for all fields
   */
  getErrors(): { [fieldName: string]: string[] };
  /**
   * Returns the error messages for the specified test
   */
  getErrors(fieldName: string): string[];
  /**
   * Returns the warning messages for all fields
   */
  getWarnings(): { [fieldName: string]: string[] };
  /**
   * Returns the warning messages for the specified test
   */
  getWarnings(fieldName: string): string[];

  /**
   * Returns whether the specified group has errors
   */
  hasErrorsByGroup(groupName: string): boolean;
  /**
   * Returns whether the specified group and field combination has errors
   */
  hasErrorsByGroup(groupName: string, fieldName: string): boolean;
  /**
   * Returns whether the specified group has warnings
   */
  hasWarningsByGroup(groupName: string): boolean;
  /**
   * Returns whether the specified group and field combination has warnings
   */
  hasWarningsByGroup(groupName: string, fieldName: string): boolean;

  /**
   * Returns all the error messages for the specified group
   */
  getErrorsByGroup(groupName: string): { [fieldName: string]: string[] };
  /**
   * Returns all the error messages for the specified group and field
   */
  getErrorsByGroup(groupName: string, fieldName: string): string[];
  /**
   * Returns all the warning messages for the specified group
   */
  getWarningsByGroup(groupName: string): { [fieldName: string]: string[] };
  /**
   * Returns all the warning messages for the specified group and field
   */
  getWarningsByGroup(groupName: string, fieldName: string): string[];
  /**
   * Runs a callback when all tests are finished running
   */
  done(cb: DoneCB): void;
  /**
   * Runs a callback when all tests of the specified field finished running
   */
  done(fieldName: string, cb: DoneCB): void;
};

export type DraftResult = Omit<IVestResult, 'done'>;

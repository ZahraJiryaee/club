const LoggingLevel = {
  None: "None",
  Info: "Info",
  Warnings: "Warnings",
  Errors: "Errors",
};

const _level =
  process.env.NODE_ENV === "development"
    ? LoggingLevel.Info
    : LoggingLevel.None;

const log = (message, level = LoggingLevel.Warnings, ...optionalParams) => {
  if (shouldLog(level)) {
    switch (level) {
      case LoggingLevel.Errors:
        if (optionalParams[0].length === 0) {
          console.error(message);
        } else {
          console.error(message, ...optionalParams);
        }
        break;

      case LoggingLevel.Warnings:
        if (optionalParams[0].length === 0) {
          console.warn(message);
        } else {
          console.warn(message, ...optionalParams);
        }
        break;

      case LoggingLevel.Info:
        if (optionalParams[0].length === 0) {
          console.info(message);
        } else {
          console.info(message, ...optionalParams);
        }
        break;
      default:
        console.debug(message, ...optionalParams);
    }
  }
};

const shouldLog = (level) => {
  if (_level === LoggingLevel.None) {
    return false;
  } else if (_level === LoggingLevel.Errors) {
    return level === LoggingLevel.Errors;
  } else if (_level === LoggingLevel.Warnings) {
    return level === LoggingLevel.Errors || level === LoggingLevel.Warnings;
  } else if (_level === LoggingLevel.Info) {
    return (
      level === LoggingLevel.Errors ||
      level === LoggingLevel.Warnings ||
      level === LoggingLevel.Info
    );
  } else {
    return true;
  }
};

const logError = (message, ...optionalParams) => {
  log(message, LoggingLevel.Errors, optionalParams);
};

const logWarning = (message, ...optionalParams) => {
  log(message, LoggingLevel.Warnings, optionalParams);
};

const logInfo = (message, ...optionalParams) => {
  log(message, LoggingLevel.Info, optionalParams);
};

const logger = {
  logError,
  logWarning,
  logInfo,
};
export default logger;

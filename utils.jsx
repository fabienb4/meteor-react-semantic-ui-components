ReactSUI.utils = {};

ReactSUI.utils.addClass = function(className, ...newClassNames) {
  className = _.isString(className) ? className : "";

  _.each(newClassNames, newClassName => {
    let trimmedClassNames   = _.trim(className);
    let trimmedNewClassName = _.trim(newClassName);

    trimmedClassNames = trimmedClassNames.replace(trimmedNewClassName, "");

    if (_.isString(trimmedNewClassName) && ! _.isEmpty(trimmedNewClassName)) {
      className = trimmedClassNames + " "  + trimmedNewClassName;
    }
  });

  return _.trim(className);
};

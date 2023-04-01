const AccountDefaultState = {
  User: {},
  Auth: false,
  Loading: true,
};

const NotificationDefaultState = {
  Title: null,
  Message: null,
  Status: false,
};

const ConfirmationDefaultState = {
  Title: null,
  Message: null,
  Action: null,
  Status: false,
};

const ContentDefaultState = {
  Content: null,
  Author: null,
  Background: null,
  Loaded: false,
  Loading: true,
};

export {
  AccountDefaultState,
  NotificationDefaultState,
  ConfirmationDefaultState,
  ContentDefaultState,
};

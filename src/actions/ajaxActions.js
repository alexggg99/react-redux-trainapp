export function beginAjaxCall() {
  return {type: 'BEGIN_AJAX_CALL'};
}

export function errorAjaxCall() {
  return {type: 'ERROR_AJAX_CALL'};
}

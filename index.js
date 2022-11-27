onDOMContentLoaded = (event) => {};

function handleShowDetails(props) {
  const optionDetails = document.querySelectorAll(".selected-option-details");
  const options = document.querySelectorAll(".option");
  //
  let el = document.querySelector(
    `.selected-option-details[data-option-detail="${props}"]`
  );
  let option = document.querySelector(`.option[data-option="${props}"]`);
  //
  el.classList.add(`show-details`);
  option.classList.add(`active`);
  //
  optionDetails.forEach((item) => {
    if (+item.attributes?.[0].value !== props)
      item.classList.remove(`show-details`);
  });
  //
  options.forEach((item) => {
    if (+item.attributes?.[1].value !== props) item.classList.remove(`active`);
  });
}

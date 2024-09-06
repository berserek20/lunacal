export default function IntroReducer(state, action) {
  switch (action.type) {
    case "About":
      state.selected = state.AboutContent;
      state.selectedId = "About";
      break;

    case "Experience":
      state.selected = state.ExperienceContent;
      state.selectedId = "Experience";
      break;

    case "Recomended":
      state.selected = state.RecomendedContent;
      state.selectedId = "Recomended";
      break;

    default:
      return state;
  }
  return { ...state };
}

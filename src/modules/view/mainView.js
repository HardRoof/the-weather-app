class View {
  constructor() {}

  showMainCard() {
    const temp = document.getElementsByTagName("template")[0];
    const clon = temp.content.cloneNode(true);
    document.getElementsByClassName("container")[0].append(clon);
  }
}

export default View;

class View {
  constructor() {}

  showMainCard(position) {
    const temp = document.getElementsByTagName("template")[position];
    const clone = temp.content.cloneNode(true);
    document.getElementsByClassName("container")[0].append(clone);
  }
}

export default View;

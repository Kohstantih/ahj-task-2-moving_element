export default function move(element, box) {
  const lastIndex = box.findIndex((el) => el.querySelector('.goblin'));
  const index = Math.round(Math.random() * (box.length - 1));

  if (index === lastIndex) {
    move(element);
    return;
  }

  box[index].append(element);
}

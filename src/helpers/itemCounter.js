export function AddItem(num) {
  return (num += 1);
}
export function RemoveItem(num) {
  num -= 1;
  return !num == 0 ? num : 1;
}

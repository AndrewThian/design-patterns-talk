class ConsoleObs {
  constructor() {}

  notify(model) {
    console.log(`color: ${model.color} | number: ${model.number}`);
  }
}
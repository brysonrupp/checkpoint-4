import { ClocksController } from "./Controllers/ClocksController.js";
import { InspireController } from "./Controllers/InspiresController.js";
import { NotesController } from "./Controllers/NotesController.js";
import { QuotesController } from "./Controllers/QuotesController.js";
import { WeathersController } from "./Controllers/WeathersController.js";
// import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();

  inspireController = new InspireController()

  quotesController = new QuotesController()

  weathersController = new WeathersController()

  clocksController = new ClocksController()

  notesController = new NotesController()

}


window["app"] = new App();

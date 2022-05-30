// Дэлгэцтэй ажиллах контроллер
var uiController = (function() {
    var DOMstrings = {
        inputType: ".add__type",
        inputDescription: ".add__description",
        inputValue: ".add__value",
        addBtn: '.add__btn'
    };
    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value, // exp, inc
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },
        getDOMstrings: function(){
            return DOMstrings;
        }
    };
  })();
  
//   Санхүүтэй ажиллах контроллер
// Private data
  var financeController = (function() {
      // Private data - Хаалттай байгууллагч функц
    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
      }
       // Private data - Хаалттай байгууллагч функц
      var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
      };
      // Private data
      var data = {
        items: {
          inc: [],
          exp: []
        },
      
        totals: {
          inc: 0,
          exp: 0
        }
      };
      return {
        addItem: function(type, desc, val) {
          var item, id;
    
          if (data.items[type].length === 0) id = 1;
          else {
            id = data.items[type][data.items[type].length - 1].id + 1;
          }
    
          if (type === "inc") {
            item = new Income(id, desc, val);
          } else {
            item = new Expense(id, desc, val);
          }
    
          data.items[type].push(item);
        },
    
        seeData: function() {
          return data;
        }
      };
    })();
  
  var appController = (function(uiController, financeController) {
  
    var ctrlAddItem = function() {
        // 1. Оруулах өгөгдлийг дэлгэцээс олж авна     
        var input = uiController.getInput();
        // console.log(input);
        financeController.addItem(input.type, input.description, input.value);
        // 2. Олж авсан өгөгдлүүдээ санхүүгийн контроллерт дамжуулж тэнд хадгалана.
        // 3. Олж авсан өгөгдлүүдээ вэб дээрэй тохирох хэсэгт нь гаргана
        // 4. Төсвийг тооцоолно.
        // 5. Эцсийн үлдэгдэл, тоdоцоог дэлгэцэнд гаргана.
        
    };
    
    var setupEventListeners = function() {
        var DOM = uiController.getDOMstrings();
    
        document.querySelector(DOM.addBtn).addEventListener("click", function() {
          ctrlAddItem();
        });
    
        document.addEventListener("keypress", function(event) {
          if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
          }
        });
      };
    
      return {
        init: function() {
          console.log("Application started...");
          setupEventListeners();
        }
      };
    })(uiController, financeController);
    
    appController.init();;
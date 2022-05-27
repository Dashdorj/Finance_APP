// Дэлгэцтэй ажиллах контроллер
var uiController = (function() {



  })();
  
//   Санхүүтэй ажиллах контроллер
  var financeController = (function() {


  })();
  
  var appController = (function(uiController, financeController) {
    var ctrlAddItem = function() {
        // 1. Оруулах өгөгдлийг дэлгэцээс олж авна
        console.log('Дэлгэцээс өгөгдөл авах хэсэг.');
        console.log('Enter дарсан байна.');

        // 2. Олж авсан өгөгдлүүдээ санхүүгийн контроллерт дамжуулж тэнд хадгалана.


        // 3. Олж авсан өгөгдлүүдээ вэб дээрэй тохирох хэсэгт нь гаргана


        // 4. Төсвийг тооцоолно.


        // 5. Эцсийн үлдэгдэл, тоdоцоог дэлгэцэнд гаргана.
        
    }
    document.querySelector('.add__btn').addEventListener('click',function(){
        ctrlAddItem();

    });

    document.addEventListener("keypress", function(event){
       if(event.keyCode === 13 || event.which === 13) {
           ctrlAddItem();                   
       } else console.log('Өөр товч дарсан байна :' + event.keyCode);  
    })

  })(uiController, financeController);
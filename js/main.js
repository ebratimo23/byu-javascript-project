$(document).ready(function(){

  //slider
    if(window.location.href.indexOf('index') > -1){
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            auto: true,
            pager: false
          });
      }

      //post
      if(window.location.href.indexOf('index') > -1){
        var posts = [
          {
            title: 'Proof of title 1',
            date: 'Posted on the day '+ moment().date() + " of " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Totam necessitatibus consectetur maxime tempora est oditillum aliquam deserunt magnam explicabo cumque sequi corrupti,beatae recusandae, ipsa at rerum voluptatem libero itaque cuin officiis! Et totam reprehenderit nulla corporis illo,voluptas eligendi atque, sequi iure eum rerum soluta quod. Obcaecati odit,laudantium magni debitis, magnam inventore doloremque, expedita explicabo quisquam sit quasi impedit praesentium nisi facilis cupiditate? Expedita veniam necessitatibus omnis,a aspernatur sapiente ipsam ducimus non, voluptatibus quos ab.'
          },
          {
            title: 'Proof of title 2',
            date: new Date(),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Totam necessitatibus consectetur maxime tempora est oditillum aliquam deserunt magnam explicabo cumque sequi corrupti,beatae recusandae, ipsa at rerum voluptatem libero itaque cuin officiis! Et totam reprehenderit nulla corporis illo,voluptas eligendi atque, sequi iure eum rerum soluta quod. Obcaecati odit,laudantium magni debitis, magnam inventore doloremque, expedita explicabo quisquam sit quasi impedit praesentium nisi facilis cupiditate? Expedita veniam necessitatibus omnis,a aspernatur sapiente ipsam ducimus non, voluptatibus quos ab.'
          },
          {
            title: 'Proof of title 3',
            date: new Date(),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Totam necessitatibus consectetur maxime tempora est oditillum aliquam deserunt magnam explicabo cumque sequi corrupti,beatae recusandae, ipsa at rerum voluptatem libero itaque cuin officiis! Et totam reprehenderit nulla corporis illo,voluptas eligendi atque, sequi iure eum rerum soluta quod. Obcaecati odit,laudantium magni debitis, magnam inventore doloremque, expedita explicabo quisquam sit quasi impedit praesentium nisi facilis cupiditate? Expedita veniam necessitatibus omnis,a aspernatur sapiente ipsam ducimus non, voluptatibus quos ab.'
          },
          {
            title: 'Proof of title 4',
            date: new Date(),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Totam necessitatibus consectetur maxime tempora est oditillum aliquam deserunt magnam explicabo cumque sequi corrupti,beatae recusandae, ipsa at rerum voluptatem libero itaque cuin officiis! Et totam reprehenderit nulla corporis illo,voluptas eligendi atque, sequi iure eum rerum soluta quod. Obcaecati odit,laudantium magni debitis, magnam inventore doloremque, expedita explicabo quisquam sit quasi impedit praesentium nisi facilis cupiditate? Expedita veniam necessitatibus omnis,a aspernatur sapiente ipsam ducimus non, voluptatibus quos ab.'
          },
          {
            title: 'Proof of title 5',
            date: new Date(),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Totam necessitatibus consectetur maxime tempora est oditillum aliquam deserunt magnam explicabo cumque sequi corrupti,beatae recusandae, ipsa at rerum voluptatem libero itaque cuin officiis! Et totam reprehenderit nulla corporis illo,voluptas eligendi atque, sequi iure eum rerum soluta quod. Obcaecati odit,laudantium magni debitis, magnam inventore doloremque, expedita explicabo quisquam sit quasi impedit praesentium nisi facilis cupiditate? Expedita veniam necessitatibus omnis,a aspernatur sapiente ipsam ducimus non, voluptatibus quos ab.'
          },
          {
            title: 'Proof of title 6',
            date: new Date(),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Totam necessitatibus consectetur maxime tempora est oditillum aliquam deserunt magnam explicabo cumque sequi corrupti,beatae recusandae, ipsa at rerum voluptatem libero itaque cuin officiis! Et totam reprehenderit nulla corporis illo,voluptas eligendi atque, sequi iure eum rerum soluta quod. Obcaecati odit,laudantium magni debitis, magnam inventore doloremque, expedita explicabo quisquam sit quasi impedit praesentium nisi facilis cupiditate? Expedita veniam necessitatibus omnis,a aspernatur sapiente ipsam ducimus non, voluptatibus quos ab.'
          },
        ];


        posts.forEach((item, index) => {
          var post = `
              <article class="post">
                  <h2>${item.title}</h2>
                  <span class="date">${item.date}</span>
                    <p>   
                        ${item.content}
                    </p>
                    <a href="#" class="button-more">Read more</a>
              </article>`;

              console.log(post);

              $("#posts").append(post);
        });
      }
      
      // Theme chooser

      var theme = $("#theme");

      $("#to-green").click(function(){
        theme.attr("href", "css/green.css");
      });

      $("#to-red").click(function(){
        theme.attr("href", "css/red.css");
      });

      $("#to-blue").click(function(){
        theme.attr("href", "css/blue.css");
      });

      // scroll up the web

      $('.subir').click(function(e){
        e.preventDefault();
        $('html, body').animate({
          scrollTop: 0
        }, 500);

        return false
      })

      //login false 

      $("#login form").submit(function(){
        var form_name = $("#form_name").val();

        localStorage.setItem("form_name", form_name);

      });

      var form_name = localStorage.getItem("form_name");
      if(form_name != null && form_name != "undefined"){
        var about_parrafo = $("#about p");

        about_parrafo.html("<br><strong>Bienvenido, " +form_name+"</strong>");
        about_parrafo.append("<a href='#' id='logout'>Cerrar sesion</a>");

        $("#login").hide();
        $("#logout").click(function(){
          localStorage.clear();
          location.reload();
        });
      }

      if(window.location.href.indexOf('about') > -1){
        $("#acordeon").accordion();
      }

      //relog
      if(window.location.href.indexOf('reloj') > -1){

        setInterval(function(){
          var reloj = moment().format("hh:mm:ss");
          $('#reloj').html(reloj);
        },1000);
      }

      //validation

      if(window.location.href.indexOf('contact') > -1){

        $("form input[name='date']").datepicker({
          dateFormat: 'dd-mm-yy'
        });
        $.validate({
          lang: 'es',
          errorMessagePosition: 'top',
          scrollToTopOnError:true
        });
        
      }
});

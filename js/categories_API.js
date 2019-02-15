var url = window.location.href;
var stringUrl = url;
var result = stringUrl.split("nome=").pop();
var regex =  /[a-zA-Z\u00C0-\u00FF ]+/i;

if(regex.test(result)){
    $(window).load(function(){
        $("#status").fadeOut();
        
        $("#preloader").delay(2500).fadeOut(1500);
        
        
        }) 
    
    
    var url =
        'https://api.themoviedb.org/3/search/movie?api_key=2cdf0d65c5e1dcf6d9cb6e4117a86188&language=pt-BR&query=' +
        result;
    
    
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            let output = '<h2>Filme</h2>';
            data.results.forEach(function (filme) {
                //verifica de o filme tem capa (poster_path)
    
                if (filme.poster_path != null) {
                    
                      // função para tirar as "" simples e dublado do texto
                if(filme.overview!= ""){
                    var RegExp = /["|']/g;
                    var texto=filme.overview.replace(RegExp,"");
                }
                else{
                    texto = "Esse filme ainda não possui tradução para o portuguẽs ...";
                }
    
                    output += `

                        <li class="example-item ">
                        
                        <a href="https://image.tmdb.org/t/p/w300${filme.poster_path}"id="tam" data-lightbox="mygallery" data-title="${texto}" >
                        <img src="https://image.tmdb.org/t/p/w300${filme.poster_path}"id="tam" alt="ststststs"> </a>
                     
                            
                            <div class="product_title link"> 
                                <div class="product_content">
                                    <div class="product_title"><a href="cart.html?${filme.id}">${filme.title}</a></div>	
                            </div>
                            </div></li>
     
                    `;
    
                }
    
            });
    
            document.getElementById('output').innerHTML = output;
    
    
        })

}else{
    window.alert('TESTE')
    document.getElementById('output').innerHTML = "";
    history.back()

}




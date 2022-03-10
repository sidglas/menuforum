
const menuGen = () => {

    //==============================================================
    // develop_passo01 - novo commit a ser feito, 
    // ficando na develop
    // a cada commit adiciono um quadro igual a este, mudando o passo
    // 
    //==============================================================
    // develop_passo02 - novo commit a ser feito, 
    // ficando na develop
    // a cada commit adiciono um quadro igual a este, mudando o passo
    // 
    //==============================================================
    // develop_passo03 - novo commit a ser feito, 
    // ficando na develop
    // a cada commit adiciono um quadro igual a este, mudando o passo
    // 
    //==============================================================
    // develop_passo04 - novo commit a ser feito, 
    // ficando na develop
    // a cada commit adiciono um quadro igual a este, mudando o passo
    // 
    //==============================================================

    function iniciaMenu() {
      // faz loop para criar os eventos dos elementos da página
      // fork Sidnei Glasman
    
        console.log('quem vem antes, será eu? ITENS', qtItens)
        console.log('second change for pull request')
    
      for (var cont = 0; cont <= qtItens; cont++) {
        console.log('tratando ', h4s[cont]);
        console.log('Menu0 tratando h4 h4 h4', h4s[cont]);      
      console.log('tratando ', h4s[cont].nextElementSibling, 'OVER');
      
    
        moldu[cont].addEventListener("mouseover", function() {
         
          this.firstElementChild.nextElementSibling.classList.remove ('caixa');
          this.firstElementChild.nextElementSibling.classList.add ('caixa1');
        });		
    
      console.log('loop de eventos MOUSEOVER' , cont);
      }
    //=====================================================================================
      for (var cont = 0; cont <= qtItens; cont++) {
    
      console.log('tratando ', moldu[cont].nextElementSibling, 'OUT');	
    
    
        moldu[cont].addEventListener("mouseout", function() {
          
            this.firstElementChild.nextElementSibling.classList.remove ('caixa1');
            this.firstElementChild.nextElementSibling.classList.add ('caixa');
        });		
    
      console.log('loop de eventos MOUSEOUT' );
    
      }
    //=======================================================================================
      for (var cont = 0; cont <= qtItens; cont++) {
    
      console.log('tratando ', h4s[cont].nextElementSibling, 'CLICK');	
    
        
        h4s[cont].addEventListener("click", function() {
            var prox = this.nextElementSibling; /* next sibling to h4 is a div containing under it menu itens*/
    
            console.log('prox', prox);
    
        if (prox.classList.contains ('caixa1')) {
          prox.classList.remove ('caixa1');
          prox.classList.add ('caixa');
          return;
        }
    
        if (prox.classList.contains ('caixa')) {
          prox.classList.remove ('caixa');
          prox.classList.add ('caixa1');
          return;
          
        }
        });
      }
        console.log('fim da inicia menu())))))))))))')
    }
    //================================================================================
    
      function efeitoItens() {
        console.log('xXXCCCCCxxxxxxxxxjjjjjjjjjjjjjjjjjj') ;
          
        //let h4s = document.querySelectorAll('h4');
        
    
        console.log(guarda.length);
    
        for (var i = 0; i <= guarda.length - 1; i++) {
    
          console.log('guarda ', i, ' ', guarda[i]) ;
          
        }
      }
    
    //=================================================================================
    //===============================================================
    
    // Incxlusão de node
    console.log('vem antes 2  VEM ANTES 2')
    var nodeLi = document.createElement('li');
    
    
    var nodeDiv01 = document.createElement('div');   
    nodeDiv01.setAttribute('class','moldura');
    
    var nodeH4 = document.createElement('h4');   
    nodeH4.setAttribute('class','titulo');
    //nodeH4.setAttribute('class','elh4');
    var nodeTex01 = document.createTextNode("CRIANDO");
    nodeH4.appendChild(nodeTex01);
    
    var nodeA01 = document.createElement('a'); 
    nodeA01.setAttribute("href","/exemplo07.php");
    var nodeTex02 = document.createTextNode("Na Unha");
    nodeA01.appendChild(nodeTex02);
    
    
    var nodeDiv02 = document.createElement('div');   
    nodeDiv02.setAttribute('class','caixa')
    nodeDiv02.appendChild(nodeA01);
    
    nodeDiv01.appendChild(nodeH4);
    nodeDiv01.appendChild(nodeDiv02);
    nodeLi.appendChild(nodeDiv01);
    classe = '.scrollhorizon ul';
    var list = document.querySelector(classe); 
    list.setAttribute('class','ulmargens');
    //insere o novo nodo LI como primeiro da lista!
    list.insertBefore(nodeLi, list.childNodes[1]);
    
    console.log('inserção de ITEM  inserção de ITEM  inserção de ITEM ');
    
    
    //==============================================================
    // aqui 111
    // nova01 nova01 nova01 nova01
    // Criada a branch develop
    //var elemUl=document.getElementsByTagName('ul');
    // firElem antes de qualLi
    // alterada develop vez 1
    // alterada develop vez 2
    // alterada develop vez 3
    // bloco alter develop novo 01
    // bloco alter develop novo 02
    console.log('estou alanquir');
    var elemUl=document.querySelectorAll('.scrollhorizon ul');
    console.log(elemUl);
    console.log(elemUl[0].clientWidth);
    
    
    /* fazemos o loop, mas sabemos que tem apenas um UL */
    for (var i = 0 ; i <= elemUl.length - 1; i++) {
      console.log(elemUl[i]);
      console.log('Qt filhos do ul ' + elemUl[i].childElementCount);
      /*console.log(elemUl[i].clientWidth);*/
    }
    
    /* varrer LI do ul 
    ATENCAO o primeiro LI é o primeiro Filho do UL
    Próximos LI são os Irmãos deste Filho (LI) 
    */
    
    var qtIrmaos = elemUl[0].childElementCount;
    var firstElm =  elemUl[0].firstElementChild;
    var qualLi =  elemUl[0].firstElementChild;
    
    
    console.log('prim. filho ' + qualLi);
    console.log(qualLi);
    var tamLi = qualLi.offsetWidth;
    console.log('tamanho Li ' + tamLi);
    /* agora pegamos os irmãos do primeiro filho */
    
    qualLi = qualLi.nextElementSibling;  // esperando que de certo auto referencia
    /*var contTotalLi = elemUl[0].childElementCount - 1;*/
    for (var i = 1 ; i <= qtIrmaos - 1; i++) {
      console.log(qualLi);
      tamLi = qualLi.offsetWidth;
      console.log('tamanho Li ' + tamLi);	
      qualLi = qualLi.nextElementSibling;
    
    }
    
    /* acerta para o menu conter  a largura que se quer:
    a partir da posição escolhida: initialLength
    Até atingir o tamanho escolhido: intervalLength
      prevendo já o scroll esquerda <-> direita
    
      Este trecho varre todos os <li> , soma o tamanho que ele ocupa no menu.
      Se cabe no menu, ele fica
      Se não cabe, é retirado (com todos seus dependentes childs ou sibling abaixo dele)
    */
    
    var initialPos = 0;
    var initialLength = 0;
    var intervalLength = 1000;
    var selectedLength = 0;
    var qtItens = -1;
    var guarda = [];
    var indG = 0;
    
    console.log('DETERMINA qtitens');
    curLi = firstElm;
    console.log('irmaos', qtIrmaos);
    for (var i = initialPos; i < qtIrmaos; i++) {
    
      console.log('somando em qtItens ????', qtItens);
      console.log('selectedLength ', selectedLength)
      console.log('curLi.offsetWidth ', curLi.offsetWidth)
      console.log('intervalLength ', intervalLength)
    
      if  ((selectedLength + curLi.offsetWidth) <= intervalLength) {
          selectedLength +=curLi.offsetWidth;
    
          /* pega o h4, pois é a visibilidade dele que queremos alternar AGORA É MOLDURA */
          var elmH4Intern = curLi.firstElementChild;
          // guarda dados para uso posterior em animação
    
          qtItens++;
    
    
      }	else {
          selectedLength +=curLi.offsetWidth;
          /* pega o h4, pois é a visibilidade dele que queremos alternar */
          var elmH4Intern = curLi.firstElementChild;			
    
            console.log('ANTES01  ',elmH4Intern.classList);
            
            elmH4Intern.classList.add('titulo_dont_show');
            elmH4Intern.classList.remove('moldura');
    
            console.log('DEPOIS01  ',elmH4Intern.classList);
    
      }
      guarda[15] = document.querySelectorAll('.scrollhorizon UL');
      guarda[16] = document.querySelector('.scrollhorizon .moldura');
      guarda[indG] = elmH4Intern.querySelectorAll('.scrollhorizon h4');
      indG++;	
      curLi = curLi.nextElementSibling;	
      console.log('sempre avanti ' + curLi);
      if (curLi != null) {
        console.log(curLi.offsetWidth);
      }
    }
    
    
    let h4s = document.querySelectorAll('.scrollhorizon h4');
    let lis = document.querySelectorAll('.scrollhorizon li');
    let moldu = document.querySelectorAll('.scrollhorizon .moldura');
    
    console.log('TESTANDO CLASSE h4s', h4s);
    console.log('SEPARANDO ');
    console.log(h4s[0]);
    console.log('TESTANDO CLASSE lis', lis);
    console.log('TESTANDO CLASSE moldu', moldu);
    
    //let tamanho = h4s.length ;
    let tamanho = moldu.length ;
    console.log('TAMANHO MOLDURA ', tamanho);
    
    
    
    iniciaMenu();
    console.log('chamando a efeitoItens');
    efeitoItens();
    }

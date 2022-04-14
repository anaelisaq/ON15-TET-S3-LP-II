    //clientes
         let clienteLilit = [
        {produto: 'Bolsa pequena', valor: 49.0}, 
        {produto: 'Cinto preto', valor: 22.0}, 
        {produto: 'Jaqueta Jeans', valor: 300.0}, 
        {produto: 'Calça preta', valor: 100.0}, 
        {produto: 'Blusa simples', valor: 35.0}, 
        {produto: 'Calça jeans clara', valor: 130.0}, 
        {produto: 'Blusa preta gola alta', valor: 60.0}, 
        {produto: 'Short verde canelado', valor:  80.0}, 
        {produto: 'Salto agulha 39', valor:  250.0}, 
        {produto: 'Tênis casual preto', valor:  120.0}, 
        {produto: 'meia calça transparente', valor:  30.0}]

        let clienteOlivia = [
        {produto: 'Calça preta', valor: 100.0}, 
        {produto: 'Calça jeans clara', valor: 130.0},
        {produto: 'Jaqueta Jeans', valor: 300.0},
        {produto: 'Tênis casual preto', valor: 120.0}]

        let clienteBruna = [
        {produto:  'Short verde canelado', valor: 80.0},
        {produto: 'Blusa preta gola alta', valor: 60.0}, 
        {produto: 'meia calça transparente', valor: 30.0}, 
        {produto: 'meia calça transparente', valor: 30.0},
        {produto: 'Bolsa pequena', valor: 49.0},
        {produto: 'Salto agulha 35', valor: 250.0}]
        
        //função de compras          
        
        function iniciarCompras(produtosCliente){
            let valorTotal = 0;
            let descontos = 0;
            let valorFinal = 0;
            let totalProduto = produtosCliente.length; //contar indicies/produtos
            
            for (let produto of produtosCliente){
                
                valorTotal += produto.valor;

                                
                if (produto.valor >= 50 && produto.valor <= 79){
                    
                    valorFinal = produto.valor - (produto.valor*0.05)
                    descontos += (produto.valor*0.05)
                    console.log(`com 5% desconto, esse é o novo preço da peça: ${valorFinal}`)
                       
                } else if (produto.valor >= 80 && produto.valor <= 99) {
                    
                    valorFinal = produto.valor - (produto.valor*0.1)
                    descontos+= (produto.valor*0.1)
                    console.log(`com 10% desconto, esse é o novo preço da peça: ${valorFinal}`)
                    
                } else if (produto.valor >= 100 && produto.valor <= 199){
                    
                    valorFinal += produto.valor - (produto.valor*0.2)
                    descontos += (produto.valor*0.2)
                    console.log(`com 20% desconto, esse é o novo preço da peça: ${valorFinal}`)
            
                } else if (produto.valor >= 200){
            
                    valorFinal += (produto.valor*0.5)
                    descontos += (produto.valor*0.5)
                    console.log(`com 50% desconto, esse é o novo preço da peça: ${descontos}`)
                
                } else {
                    valorFinal += produto.valor
                }

                
            }
            
            let notaFiscal = {
                "Valor Total": `R$ ${valorTotal.toFixed(2)}`,
                "Descontos": `R$ ${descontos.toFixed(2)}`,
                "Valor Final": `R$ ${valorFinal.toFixed(2)}`
            }

            if(totalProduto > 10 || valorFinal > 800){
                return console.table({
                    ...notaFiscal,
                    "Bônus": `Parabéns, você ganhou um cupom de R$ 50,00 para ser utilizado na sua próxima compra`})
            } else {
                return console.table(notaFiscal)
            }
        }
       
iniciarCompras(clienteLilit)
iniciarCompras(clienteOlivia)
iniciarCompras(clienteBruna)

    
class Login {
    selectorList(){
        const selector = {
            iptUserName: "[name='username']",
            iptUserPass: "[name='password']",
            buttonLogin: "[type='submit']",
            divErrorCred: ".oxd-alert--error"
        }
        return selector
    }

    loginUser(){
        cy.get(this.selectorList().iptUserName).type('Admin')
        cy.get(this.selectorList().iptUserPass).type('admin123')
        cy.get(this.selectorList().buttonLogin).click()
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index') //identifica se foi para essa url
        
    }

    loginUserFail(){
        cy.get(this.selectorList().iptUserName).type('adminnn')
        cy.get(this.selectorList().iptUserPass).type('2222222')
        cy.get(this.selectorList().buttonLogin).click()
        cy.get(this.selectorList().divErrorCred).should('be.visible') // verifica se a mensagem de erro
        cy.get('body').should('contain', 'Invalid credentials') // verifica se o body tem o texto Invalid credentials
    
        // if (2 > 1){
        //     cy.console('teste')

        // }else if(2 === 2){
        //     cy.console('outro teste')

        // }else{
        //     cy.console('erro')

        // }
    
    }


}
export default Login
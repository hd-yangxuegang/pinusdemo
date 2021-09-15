

export const Routers = {
    Gate:{
        query:'gate.gateHandler.queryEntry'
    },
    Connector:{
        entry:'connector.entryHandler.entry'
    },
    Auth:{
        login:'game.authHandler.login',
        logout:'game.authHandler.logout',
        register:'game.authHandler.register'
    },
    Game:{
        getPlayer:'game.playerHandler.getPlayer'
    },
    Device:{
        active:"game.deviceHandler.active"
    }
}

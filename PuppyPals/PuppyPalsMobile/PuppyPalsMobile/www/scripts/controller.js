angular.module('APIModule', ['services'])

.controller('Chat', function ($scope, ChatService) {
    getAll();

    function getAll() {
        var servCall = ChatService.getChat();
        servCall.then(function (d) {
            $scope.msgs = d.data;
        });
    }
})

.controller('Pal', function ($scope, PalService) {
    getAll();

    function getAll() {
        var servCall = PalService.getPalList();
        servCall.then(function (d) {
            $scope.pals = d.data;
        });
    }
})

.controller('Notifications', function ($scope, NotifService) {
    getAll();

    function getAll() {
        var servCall = NotifService.getNotifications();
        servCall.then(function (d) {
            $scope.msgs = d.data;
        });
    }
})

.controller('Convo', function ($scope, $stateParams, ConversationService){
    getAll();

    function getAll(){
        var call = ConversationService.getConvo($stateParams.senderId);
        call.then(function(d){
            $scope.msgs = d.data;
        })
    }
})

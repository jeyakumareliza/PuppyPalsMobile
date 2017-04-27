angular.module('services', [])

.service('ChatService', function ($http) {
    this.getChat = function () {
        var id = window.localStorage['id'];
        return $http.get("http://puppypals.azurewebsites.net/api/chat");
    };
})

.service('PalService', function ($http) {
    this.getPalList = function () {
        return $http.get("http://puppypals.azurewebsites.net/api/pal");
    };
})

.service('NotifService', function ($http) {
    this.getNotifications = function () {
        return $http.get("http://puppypals.azurewebsites.net/api/notifications");
    };
})

.service('ConversationService', function ($http){
    this.getConvo = function(senderId){
        return $http.get("http://puppypals.azurewebsites.net/api/chat/" + senderId)
    }
})

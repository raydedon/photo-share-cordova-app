/**
 * Created by ray on 7/19/2017.
 */

document.addEventListener("deviceready", function() {
    document.getElementById("take-picture").addEventListener("click", cameraTakePicture);
    document.getElementById("share").addEventListener("click", sharePicture);
    function cameraTakePicture() {
        navigator.camera.getPicture(onSuccess, onFail, {
            quality: 50,
            destinationType: Camera.DestinationType.DATA_URL
        });

        function onSuccess(imageData) {
            var image = document.getElementById('photo');
            image.src = "data:image/jpeg;base64," + imageData;
            document.getElementById('share-container').classList.remove("hide");
        }

        function onFail(message) {
            navigator.notification.confirm("error in opening", alertCallback, "ALERT", "Alert button");

            function alertCallback() {
                console.log("Alert is Dismissed!");
            }
        }
    }

    function sharePicture() {
        window.plugins.socialsharing.share(document.getElementById('caption').value, null, document.getElementById('photo').src, null);
    }
}, false);

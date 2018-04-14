(function (app) {
    app.component("uiWistia", {
        template: `<div>
    <div class="box">
        <input type="file" name="file[]" id="file-1" class="inputfile inputfile-2"               
               multiple>
        <label for="file-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17">
                <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"/>
            </svg>
            <span>{{$ctrl.options.btnTitle}}</span>
        </label>
    </div>
    <br/>
    <div class="progress rounded-0" ng-if="$ctrl.progress>0">
        <div class="progress-bar"
             role="progressbar"
             style="width: 0%;"
             aria-valuenow="0"
             aria-valuemin="0"
             aria-valuemax="100">{{$ctrl.progress}} %
        </div>
    </div>
    <br/>
    <div class="wistia_embed videoFoam=true w-100"
         style="height: 360px"
         ng-if="$ctrl.isVideoReady"
         ng-class="$ctrl.isVideoReady ? $ctrl.videoId : ''">&nbsp;
    </div>
</div>`,
        bindings: {
            onProgress: "&",
            onSuccess: "&",
            uiOptions: "<"
        },
        controller: function ($scope, $element) {
            var ctrl = this;
            ctrl.isVideoReady = false;
            ctrl.progress = 0;

            ctrl.options = {
                accessToken: "eebacce87545945c16dfbf561f3054539aa4d99d4171dc05e3410e79c3f3b4a6",
                btnTitle: "Upload a video"
            }
            angular.extend(ctrl.options, ctrl.uiOptions);

            var uploadUrl = "https://upload.wistia.com/?access_token=" + ctrl.options.accessToken;

            $element.find("input[type=file]")
                .fileupload({
                    url: uploadUrl,
                    dataType: 'json',
                    done: function (e, data) {
                        ctrl.videoId = "wistia_async_" + data.result.hashed_id;
                        ctrl.isVideoReady = true;
                        $scope.$applyAsync();
                        ctrl.onSuccess({data: ctrl.progress});
                    },
                    progressall: function (e, data) {
                        ctrl.progress = parseInt(data.loaded / data.total * 100, 10);
                        $element.find(".progress-bar").css('width', ctrl.progress + '%');
                        $scope.$applyAsync();
                        ctrl.onProgress({progress: ctrl.progress});
                    }
                });
        }

    })
})(angular.module("mainApp"));
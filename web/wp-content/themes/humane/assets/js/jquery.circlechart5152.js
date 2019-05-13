// https://www.jqueryscript.net/chart-graph/Smooth-Circle-Chart-Plugin-with-jQuery-CSS3-Circle-Charts.html

/**
 *  Progress Bar Color
 */
    
if (cause_progress_color == null){
	var cause_progress_color = '#666';
}

(function($){$.fn.extend({percentcircle:function(options){var defaults={animate:!0,diameter:60,guage:3,coverBg:'#fff',bgColor:'#efefef',fillColor:cause_progress_color,percentSize:'14px',percentWeight:'normal'},styles={cirContainer:{'width':defaults.diameter,'height':defaults.diameter},cir:{'position':'relative','text-align':'center','width':defaults.diameter,'height':defaults.diameter,'border-radius':'100%','background-color':defaults.bgColor,'background-image':'linear-gradient(91deg, transparent 50%, '+defaults.bgColor+' 50%), linear-gradient(90deg, '+defaults.bgColor+' 50%, transparent 50%)'},cirCover:{'position':'relative','top':defaults.guage,'left':defaults.guage,'text-align':'center','width':defaults.diameter-(defaults.guage*2),'height':defaults.diameter-(defaults.guage*2),'border-radius':'100%','background-color':defaults.coverBg},percent:{'display':'block','width':defaults.diameter,'height':defaults.diameter,'line-height':defaults.diameter+'px','vertical-align':'middle','font-size':defaults.percentSize,'font-weight':defaults.percentWeight,'color':defaults.fillColor}};var that=this,template='<div><div class="ab"><div class="cir"><span class="perc">{{percentage}}</span></div></div></div>',options=$.extend(defaults,options)
function init(){that.each(function(){var $this=$(this),perc=Math.round($this.data('percent')),deg=perc*3.6,stop=options.animate?0:deg,$chart=$(template.replace('{{percentage}}',perc+'%'));$chart.css(styles.cirContainer).find('.ab').css(styles.cir).find('.cir').css(styles.cirCover).find('.perc').css(styles.percent);$this.append($chart);setTimeout(function(){animateChart(deg,parseInt(stop),$chart.find('.ab'))},250)})}
var animateChart=function(stop,curr,$elm){var deg=curr;if(curr<=stop){if(deg>=180){$elm.css('background-image','linear-gradient('+(90+deg)+'deg, transparent 50%, '+options.fillColor+' 50%),linear-gradient(90deg, '+options.fillColor+' 50%, transparent 50%)')}else{$elm.css('background-image','linear-gradient('+(deg-90)+'deg, transparent 50%, '+options.bgColor+' 50%),linear-gradient(90deg, '+options.fillColor+' 50%, transparent 50%)')}
curr ++;setTimeout(function(){animateChart(stop,curr,$elm)},1)}};init()}})})(jQuery)
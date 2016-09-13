jQuery(document).ready(function($){

    $('.faq-answer').hide();  // hide all answers after page load

    $('.faq-question a').click(function(e) {
        e.preventDefault();
        if ($(this).parents('.faq-item').hasClass('selected')) {
            // do nothing for now
        } else {
            $(this).parents('.entry-content').find('.faq-item.selected').removeClass('selected').find('.faq-answer').slideUp('fast');
        }
        $(this).parents('.faq-item').toggleClass('selected').find('.faq-answer').slideToggle('fast');
    });

});
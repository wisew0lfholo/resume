(function($) {
    // Load the partial components.
    $('*[partial]').each(function() {
        $(this).load('partials/' + $(this).attr('partial') + '.html');
    });
})(jQuery);

/**
 * Initialize the button that will change the title of the current page.
 * @param newTitle The new title to show.
 */
export function changeTitleAction(newTitle: string) {

    $('button').click((jqueryEvent) => {
        $('h1').text(newTitle);
        // jqueryEvent.
    });

    // $('button').css("border: 1px solid red").append("<div>YAAAAAA<div>"); // Wrong: css get (not set)
    // $('button').css("border", "1px solid red").append("<div>YAAAAAA<div>");

}

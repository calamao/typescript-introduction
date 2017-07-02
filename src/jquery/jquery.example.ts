

export function changeTitleAction(newTitle: string) {

    $('button').click(() => {
        $('h1').text(newTitle);
    });

}

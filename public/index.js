TSDViewer.create(element, {
    plugins: 'customiser'
})

TSDCustomiser.attach(element, {
    onAttach: () => {
        // attached the plugin methods
    }
});
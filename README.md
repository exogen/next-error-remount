# Next.js remounts app on error

## Observed Behavior

When an error is thrown during render that gets caught by Next.js’ error
boundary, the entire app is unmounted, then mounted again.

I assume some element above the `<App>` either changes types, or is added or
removed, such that React cannot update the existing children and needs to
remount everything.

In practice, the only noticeable change after the remount is that the `<Page>`
has been replaced by `<Error>`. So it seems possible at least to keep the
`<App>` mounted the whole time.

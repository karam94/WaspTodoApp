# Wasp Notepad App
Simple variation of the [Wasp](https://wasp-lang.dev/) Todo tutorial used as a playground to test out a few concepts, deployed as a full-stack application on Fly.io [here](#).

## Start
`wasp start`

## Start database
`wasp start db`

## Seed database
`wasp db seed`

## Update database
`wasp db migrate-dev`

## Database viewer
`wasp db studio`

## Deploy first time
`wasp deploy fly launch wasp-notepad-app lhr`

## Re-deploy
`wasp deploy fly deploy`

## Proxy Fly.io database
`fly proxy 15432:5432 -a wasp-notepad-app-db`
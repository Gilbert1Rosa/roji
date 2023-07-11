@echo off

if exist dist (
    rmdir /s /q dist
)
set NODE_ENV=production
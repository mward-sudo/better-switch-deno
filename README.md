# better-switch

A simple alternative to the switch statement for matching strings and returning
values

## To use

    import { betterSwitch } from 'https://deno.land/x/better_switch_deno@v1.0.1/mod.ts'

## Examples

Enforcing a consistent return type using type inference from the first return
value:

    const returnVal = betterSwitch('test', { 
      test: () => 'test value', 
      default: () => 'default value' 
    }) // returnVal === 'test value'

Enforcing a specified consistent return type:

    const returnVal = betterSwitch<string>('test', { 
      test: () => 'test value', 
      default: () => 'default value' 
    }) // returnVal === 'test value'

Typescript error because the default key does not return the same type as the
first key:

    const returnVal = betterSwitch('test', { 
      test: () => 'test value', 
      default: () => true 
    })

Allowing unknown return types:

    const returnVal = betterSwitch<unknown>('non existent key', {
      test: () => 'test value', 
      default: () => true 
    }) // returnVal === true

Allowing multiple specified return types

    const returnVal = betterSwitch<string | boolean>('non existent key', { 
      test: () => 'test value', 
      default: () => true 
    }) // returnVal === true

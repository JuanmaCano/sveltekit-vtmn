<script>
  import Icon from "@/components/Icon.svelte"
</script>


  <!-- using vitamix font: error in console -->
  <div class="vtmn-flex vtmn-gap-5 vtmn-justify-center vtmn-items-center">
    <span aria-hidden="true" class="vtmx-home-fill vtmn-text-4xl"> </span>
    <p>
      Using vitamix font: error in console
      Failed to decode downloaded font
      Because the app is looking for the source in the path relative to the current path ./vitamix.woff
    </p>
  </div>

  <!-- rendering a svg sprite: all works fine -->
  <div class="vtmn-flex vtmn-gap-2 vtmn-items-center vtmn-mt-10">
   <Icon icon="checkbox-fill" width={38} height={38}/>
   <p>
      Rendering a svg sprite: all works fine
   </p>
  </div>


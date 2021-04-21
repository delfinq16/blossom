<div class="wrap">
	<div id="lbg_logo">
			<h2>Manage Players</h2>
 	</div>
    <div><p>From this section you can add multiple players.</p>
    </div>

<div id="previewDialog"><iframe id="previewDialogIframe" src="" width="100%" height="600" style="border:0;"></iframe></div>

<div style="text-align:center; padding:0px 0px 20px 0px;"><img src="<?php echo plugins_url('images/icons/add_icon.gif', dirname(__FILE__))?>" alt="add" align="absmiddle" /> <a href="?page=VIDEO_PLAYER_AND_VIDEO_BACKGROUND_Add_New">Add new (Player)</a></div>
    
<table width="100%" class="widefat">

			<thead>
				<tr>
					<th scope="col" width="4%">ID</th>
					<th scope="col" width="22%">Name</th>
					<th scope="col" width="42%">Shorcode</th>
					<th scope="col" width="28%">Actions</th>
					<th scope="col" width="4%">Preview</th>
				</tr>
			</thead>
            
<tbody>
<?php foreach ( $result as $row ) 
	{
		$row=universal_video_player_and_bg_unstrip_array($row); ?>
							<tr class="alternate author-self status-publish" valign="top">
					<td><?php echo $row['id']?></td>
					<td><?php echo $row['name']?></td>
					<td><strong>Page/Post</strong>: [universal_video_player_and_bg settings_id='<?php echo $row['id']?>']<br />
                    <hr style="border-top:1px solid #CCC; border-bottom:0; border-left:0; border-right:0;" />
<strong>For header.php</strong>: <?php echo htmlspecialchars ( "<?php echo do_shortcode(\"[universal_video_player_and_bg settings_id='".$row['id']."']\");?>"); ?></td>				
					<td>
						<a href="?page=VIDEO_PLAYER_AND_VIDEO_BACKGROUND_Settings&amp;id=<?php echo $row['id']?>&amp;name=<?php echo $row['name']?>">Player Settings</a> &nbsp;&nbsp;|&nbsp;&nbsp; 
						<a href="?page=VIDEO_PLAYER_AND_VIDEO_BACKGROUND_Playlist&amp;id=<?php echo $row['id']?>&amp;name=<?php echo $row['name']?>">Playlist</a> &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; <a href="?page=VIDEO_PLAYER_AND_VIDEO_BACKGROUND_Manage_Players&id=<?php echo $row['id']?>" onclick="return confirm('Are you sure?')" style="color:#F00;">Delete</a> &nbsp;&nbsp;|&nbsp;&nbsp; <a href="?page=VIDEO_PLAYER_AND_VIDEO_BACKGROUND_Manage_Players&amp;duplicate_id=<?php echo $row['id']?>">Duplicate</a></td>
					<td align="center"><a href="javascript: void(0);" onclick="showDialogPreview(<?php echo $row['id']?>)"><img src="<?php echo plugins_url('images/icons/magnifier.png', dirname(__FILE__))?>" alt="preview" border="0" align="absmiddle" /></a></td>
	            </tr>
<?php } ?>                
						</tbody>
		</table>                





</div>				
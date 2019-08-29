
L’utilisation de l’application livraison BocoBoco :

Nous avons 10 fichier html, cela veut dire que 10 pages dans l’application + 2 fichiers js + un fichier CSS.


Commençons par le fichier :

Index.html qui représente la 1ère page (logo bocoboco, mot de passe, boutons ‘suivant’ + ‘précédent’).
AppLivreur2.html c’est la page dans laquelle nous trouvons le nom du livreur + date de livraison.
AppLivreur3.html dans cette page nous avons la liste des choses à ne pas oublier pour le livreur.
AppLivreur4.html page n° 4 c’est la ou nous voyons les récapitulatif des livraisons.
AppLivreur5.html ici c’est la recap de l’itinéraire (carte).
AppLivreur6.html et là on affiche l’itinéraire.
AppLivreur7.html une fois le livreur est arrivé chez le client, il aura donc les informations de ce dernier, et puis aura la possibilité de vérifier le nombre de bocaux que le client doit lui rendre et aussi le confirmer dans le nombre de consignes rendues.
Livraion_Termine.html dans ce fichier on donne un message de remerciement au livreur d’avoir livré les clients.
Raisons.html le fichier Raisons.html contient les raisons lesquelles le livreur n’a pas pu livré le client.

L’application livraison est complète, est terminée et est prête à démarrer, il reste uniquement l’intégration des données des client dans l’app, 

Le mot de passe actuel de l’application est : passwordlivreur 

Index.html 
Pour le Password ça se trouve dans le fichier index.html et pour sécuriser l’application j’ai donc converti le mot de passe en md5 (c’est un convertisseur de mot de passe) donc au moment de décider changer le mot de passe n’hésitez pas à aller sur ce lien : 
https://www.dcode.fr/hash-md5
et écrire votre nouveau mot de passe, ensuite prendre le résultat tout en haut et le copier dans la fonction checkPswd comme ça :

if ((document.pswdForm.pswd.value == null) == (md5(document.pswdForm.pswd.value) == ‘Le nouveau mot de passe après l’avoir chiffré '))

AppLivreur2.html
Dans ce fichier vous pourriez modifier les noms des livreurs dans la ligne n° 37.
AppLivreur3.html
Si vous souhaitez rajouter des choses pour que le livreur ne les oublie pas, dans ce fichier vous pouvez mettre tout ce que vous souhaitez rajouter à partir de la ligne 65, voici un exemple :

<div>
                <input class= "selectall" type="checkbox" id=«nom_de_l’id» name="nom_de_l’id">
                <label for=« nom_de_l’id »>Le_nom_du_checkbox_qui_sera_rajouté</label>
</div>
<p></p>

AppLivreur4.html 
Pour avoir des nouvelles colonnes et si vous souhaitez rajouter des colonnes encore plus, si simple, vous pourriez le faire à partir du <th>rajoutez_ici</th>.
Et le <td></td> sera lié avec les données du client pour un affichage automatique dépend de c’est que vous métrerez dans votre fichier GoogleSheets.

AppLivreur5.html
Recap de l’itinéraire (carte)
AppLivreur6.html
Affichage de l’itinéraire
AppLivreur7.html
Affichage de l'information de client, ici on voit toutes les informations du client une fois le livreur est arrivé chez lui, nous aurions des informations qui apparaitront automatiquement grâce au fichier de GoogleSheets qui est intégré dans l’app, ceux sont comme :
(n° de commande, nom et prénom du client, son n° de téléphone, produit frais, pain et enfin le nombre de consignes prévues)
Si nous souhaitons un jour rajouter un consigne, il suffit de copier ce code :

<tr>
                           <td>le_nom_du_bocal</td><h3></h3>
                           <td>
                            <div class="input-group">
                                <input type="number" step="0" max="" disabled="return" name="quantity" 				class="quantity-field">
                            </div>
                      </td>
                      <td>
                      <a href="#!" class="btn-primary add" data-id="1">
                <div class="input-group">
                      <input type="button" value="-" class="button-minus" data-field="quantity">
                      <input type="number" step="1" max="" name="quantity" class="quantity-field">
                      <input type="button" value="+" class="button-plus" data-field="quantity">
                </div>
                      </td>
                      <input type="hidden" id="prix-1" value=« le_ prix_du_bocal» />



Livraion_Termine.html
Dans ce fichier c’est l’affichage de remerciement au livreur quand il termine la livraison.
Raisons.html
Les raisons lesquelles les commandes n’ont pas été livré au client.

——————————————Fin de fichiers modifiable———————————————
